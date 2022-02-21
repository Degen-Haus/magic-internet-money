import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers, network } from "hardhat";
import { ChainId, setDeploymentSupportedChains } from "../utilities";
import { xMerlin } from "../test/constants";
import { BentoBoxV1 } from "../typechain";

const ParametersPerChain = {
  [ChainId.Boba]: {
    weth: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000",
    owner: xMerlin,
  },
  [ChainId.Moonriver]: {
    weth: "0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c",
    owner: xMerlin,
  },
  [ChainId.Polygon]: {
    weth: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    owner: xMerlin,
  },
};

const deployFunction: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  const chainId = await hre.getChainId();
  const parameters = ParametersPerChain[parseInt(chainId)];

  await deploy("DegenBox", {
    from: deployer,
    args: [parameters.weth],
    log: true,
    deterministicDeployment: false,
  });

  const BentoBoxV1 = await ethers.getContract<BentoBoxV1>("DegenBox");

  if ((await BentoBoxV1.owner()) != parameters.owner && network.name !== "hardhat") {
    await BentoBoxV1.transferOwnership(parameters.owner, true, false);
  }
};

export default deployFunction;

setDeploymentSupportedChains(Object.keys(ParametersPerChain), deployFunction);

deployFunction.tags = ["DegenBox"];
deployFunction.dependencies = [];
