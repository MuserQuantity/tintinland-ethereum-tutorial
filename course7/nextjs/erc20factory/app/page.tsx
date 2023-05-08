import styles from './page.module.css';
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { getDefaultWallets, RainbowKitProvider, AvatarComponent } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { sepolia, goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Blockie } from '@web3uikit/web3';
import Dapp from './app';

function generateColorFromAddress(address: string): string {
  // 把地址转成哈希值
  const hash = hashCode(address);

  // 把哈希值转成 RGB 颜色值
  const red = (hash & 0xff0000) >> 16;
  const green = (hash & 0x00ff00) >> 8;
  const blue = hash & 0x0000ff;

  // 把 RGB 颜色值转成十六进制颜色字符串
  const hex = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

  return hex;
}

function hashCode(str: string): number {
  let hash = 0;
  if (str.length == 0) {
    return hash;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
  const color = generateColorFromAddress(address);
  console.log(color);
  return ensImage ? (
    <div
      style={{
        backgroundColor: color,
        borderRadius: 999,
        height: size,
        width: size,
      }}
    >
      :^)
    </div>
  ) : <Blockie seed={address} />;
};

const { chains, provider } = configureChains(
  [sepolia, goerli],
  [publicProvider(), publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: 'MyAppName',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function Home() {
  return (
    <main className={styles.main}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} avatar={CustomAvatar} coolMode >
          <div style={{ margin: 'auto', width: '50%' }}>
            <ConnectButton />
          </div>
          <Dapp />
        </RainbowKitProvider>
      </WagmiConfig>
    </main>
  )
}
