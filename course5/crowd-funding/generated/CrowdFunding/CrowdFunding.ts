// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CampaignCreated extends ethereum.Event {
  get params(): CampaignCreated__Params {
    return new CampaignCreated__Params(this);
  }
}

export class CampaignCreated__Params {
  _event: CampaignCreated;

  constructor(event: CampaignCreated) {
    this._event = event;
  }

  get campaignId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get goal(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ContributionReceived extends ethereum.Event {
  get params(): ContributionReceived__Params {
    return new ContributionReceived__Params(this);
  }
}

export class ContributionReceived__Params {
  _event: ContributionReceived;

  constructor(event: ContributionReceived) {
    this._event = event;
  }

  get campaignId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get contributor(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class FundsWithdrawn extends ethereum.Event {
  get params(): FundsWithdrawn__Params {
    return new FundsWithdrawn__Params(this);
  }
}

export class FundsWithdrawn__Params {
  _event: FundsWithdrawn;

  constructor(event: FundsWithdrawn) {
    this._event = event;
  }

  get campaignId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CrowdFunding__campaignsResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: boolean;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    return map;
  }

  getCreator(): Address {
    return this.value0;
  }

  getGoal(): BigInt {
    return this.value1;
  }

  getDeadline(): BigInt {
    return this.value2;
  }

  getTotalFunds(): BigInt {
    return this.value3;
  }

  getActive(): boolean {
    return this.value4;
  }
}

export class CrowdFunding extends ethereum.SmartContract {
  static bind(address: Address): CrowdFunding {
    return new CrowdFunding("CrowdFunding", address);
  }

  campaigns(param0: BigInt): CrowdFunding__campaignsResult {
    let result = super.call(
      "campaigns",
      "campaigns(uint256):(address,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new CrowdFunding__campaignsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBoolean()
    );
  }

  try_campaigns(
    param0: BigInt
  ): ethereum.CallResult<CrowdFunding__campaignsResult> {
    let result = super.tryCall(
      "campaigns",
      "campaigns(uint256):(address,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CrowdFunding__campaignsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBoolean()
      )
    );
  }
}

export class CreateCampaignCall extends ethereum.Call {
  get inputs(): CreateCampaignCall__Inputs {
    return new CreateCampaignCall__Inputs(this);
  }

  get outputs(): CreateCampaignCall__Outputs {
    return new CreateCampaignCall__Outputs(this);
  }
}

export class CreateCampaignCall__Inputs {
  _call: CreateCampaignCall;

  constructor(call: CreateCampaignCall) {
    this._call = call;
  }

  get goal(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateCampaignCall__Outputs {
  _call: CreateCampaignCall;

  constructor(call: CreateCampaignCall) {
    this._call = call;
  }
}

export class BidCall extends ethereum.Call {
  get inputs(): BidCall__Inputs {
    return new BidCall__Inputs(this);
  }

  get outputs(): BidCall__Outputs {
    return new BidCall__Outputs(this);
  }
}

export class BidCall__Inputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }

  get campaignId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BidCall__Outputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }
}

export class WithdrawFundsCall extends ethereum.Call {
  get inputs(): WithdrawFundsCall__Inputs {
    return new WithdrawFundsCall__Inputs(this);
  }

  get outputs(): WithdrawFundsCall__Outputs {
    return new WithdrawFundsCall__Outputs(this);
  }
}

export class WithdrawFundsCall__Inputs {
  _call: WithdrawFundsCall;

  constructor(call: WithdrawFundsCall) {
    this._call = call;
  }

  get campaignId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawFundsCall__Outputs {
  _call: WithdrawFundsCall;

  constructor(call: WithdrawFundsCall) {
    this._call = call;
  }
}

export class RequestRefundCall extends ethereum.Call {
  get inputs(): RequestRefundCall__Inputs {
    return new RequestRefundCall__Inputs(this);
  }

  get outputs(): RequestRefundCall__Outputs {
    return new RequestRefundCall__Outputs(this);
  }
}

export class RequestRefundCall__Inputs {
  _call: RequestRefundCall;

  constructor(call: RequestRefundCall) {
    this._call = call;
  }

  get campaignId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RequestRefundCall__Outputs {
  _call: RequestRefundCall;

  constructor(call: RequestRefundCall) {
    this._call = call;
  }
}
