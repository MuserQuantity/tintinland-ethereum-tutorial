// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Crowdfunding {
    // 便于计算
    using SafeMath for uint256;
    // 自增ID
    using Counters for Counters.Counter;
    Counters.Counter private _campaignIdTracker;
    // 众筹活动结构体
    struct Campaign {
        address payable creator;
        uint256 goal;
        uint256 deadline;
        uint256 totalFunds;
        mapping(address => uint256) contributions;
        bool active;
    }
    // 用于记录多个众筹活动
    mapping(uint256 => Campaign) public campaigns;
    // 相关事件
    event CampaignCreated(uint256 indexed campaignId, address indexed creator, uint256 goal, uint256 deadline);
    event ContributionReceived(uint256 indexed campaignId, address indexed contributor, uint256 amount);
    event FundsWithdrawn(uint256 indexed campaignId, address indexed creator, uint256 amount);
    // 创建众筹活动
    function createCampaign(uint256 goal, uint256 deadline) public {
        require(goal > 0, "Goal must be greater than 0.");
        require(deadline > block.timestamp, "Deadline must be in the future.");

        uint256 campaignId = _campaignIdTracker.current();
        Campaign storage campaign = campaigns[campaignId];
        campaign.creator = payable(msg.sender);
        campaign.goal = goal;
        campaign.deadline = deadline;
        campaign.active = true;

        _campaignIdTracker.increment();
        emit CampaignCreated(campaignId, msg.sender, goal, deadline);
    }
    // 参与众筹活动
    function contribute(uint256 campaignId) public payable {
        Campaign storage campaign = campaigns[campaignId];

        require(campaign.active, "Campaign is not active.");
        require(block.timestamp < campaign.deadline, "Campaign has already ended.");
        require(msg.value > 0, "Contribution must be greater than 0.");

        campaign.contributions[msg.sender] = campaign.contributions[msg.sender].add(msg.value);
        campaign.totalFunds = campaign.totalFunds.add(msg.value);
        emit ContributionReceived(campaignId, msg.sender, msg.value);
    }
    // 活动结束后，集齐目标资金的取款函数
    function withdrawFunds(uint256 campaignId) public {
        Campaign storage campaign = campaigns[campaignId];

        require(campaign.creator == msg.sender, "Only the creator can withdraw funds.");
        require(campaign.active, "Campaign is not active.");
        require(block.timestamp >= campaign.deadline, "Campaign has not ended yet.");
        require(campaign.totalFunds >= campaign.goal, "Campaign goal has not been reached.");

        uint256 amount = campaign.totalFunds;
        campaign.totalFunds = 0;
        campaign.active = false;
        campaign.creator.transfer(amount);
        emit FundsWithdrawn(campaignId, msg.sender, amount);
    }
    // 活动结束后，未达目标资金的退款函数
    function requestRefund(uint256 campaignId) public {
        Campaign storage campaign = campaigns[campaignId];

        require(campaign.active, "Campaign is not active.");
        require(block.timestamp >= campaign.deadline, "Campaign has not ended yet.");
        require(campaign.totalFunds < campaign.goal, "Campaign goal has been reached.");

        uint256 refundAmount = campaign.contributions[msg.sender];
        require(refundAmount > 0, "No contributions found for the sender.");

        campaign.contributions[msg.sender] = 0;
        campaign.totalFunds = campaign.totalFunds.sub(refundAmount);
        payable(msg.sender).transfer(refundAmount);
    }
}
