# Deployments

## Ethereum

### Cauldrons

| Contract                 | Address                                    | Note                                     |
| ------------------------ | ------------------------------------------ | ---------------------------------------- |
| **Frax3Crv**             |                                            |                                          |
| Frax3CrvCauldron         | 0x81446B23e28377e1a15b6d0b67f7A2ACe3A8E5bB | 80% LTV 1% initial 1% Interest, 1.5% fee |
| ConvexStakingWrapperAbra | 0x873221f8651bC14aa58b79489a4A927130259844 | Frax3Crv to Convex stkFrax3Crv Wrapper   |
| Frax3CrvProxyOracle      | 0x66a809a31E6909C835219cC09eA0f52135fF0a11 | Using Frax3CrvOracle                     |
| Frax3CrvOracle           | 0xD9bA8821e9EeFC89cBc80DA1EB5e3518BE383E63 |                                          |
| StkFrax3CrvSwapper       | 0xD69E75C1c2a0f2838A6bbA8BDFf9d08C8f137cD9 | Liquidation Swapper                      |
| StkFrax3CrvLevSwapper    | 0xFd2281453d970964c46B58CD4eBF50B45E820D58 | Leverage Swapper                         |

### Utilities

| Contract           | Address                                    | Note                                                                                                                         |
| ------------------ | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| EthereumWithdrawer | 0xB2c3A9c577068479B1E5119f6B7da98d25Ba48f4 | Withdraw MIM fees from cauldron and swap for SPELL. Also used as recipient for swapping MIM fees received from other chains. |

## BSC

### Utilities

| Contract             | Address                                    | Note |
| -------------------- | ------------------------------------------ | ---- |
| MultichainWithdrawer | 0xB3f5c7D0Ac3944a9d9A9623D6B50bCeA85A26753 |      |

## Fantom

### Utilities

| Contract             | Address                                    | Note |
| -------------------- | ------------------------------------------ | ---- |
| MultichainWithdrawer | 0x7a3b799E929C9bef403976405D8908fa92080449 |      |

## Arbitrum

### Utilities

| Contract             | Address                                    | Note |
| -------------------- | ------------------------------------------ | ---- |
| MultichainWithdrawer | 0x7a3b799E929C9bef403976405D8908fa92080449 |      |

## Avalanche

### Cauldrons

| Contract                    | Address                                    | Note                                  |
| --------------------------- | ------------------------------------------ | ------------------------------------- |
| **AVAX/USDT**               |                                            |                                       |
| AvaxUsdtCauldron            | 0x0a1e6a80E93e62Bd0D3D3BFcF4c362C40FB1cF3D | 85% LTV .5% initial 3% Interest       |
| AvaxUsdtProxyOracle         | 0x2cA12e0Ca5c2E1EE8DC18eAA0D24EEd647aE7531 | Using AvaxUsdtLPOracle                |
| AvaxUsdtLPOracle            | 0xEd5D79F369D878C9038ac156D7D71b6364756f8e | Using AvaxUsdtLPChainlinkOracleV1     |
| AvaxUsdtLPChainlinkOracleV1 | 0xd15f851A912e4Fa9947e6024f16f02Ef25Ff311B | Using AvaxUsdtOracleV1                |
| AvaxUsdtOracleV1            | 0xD43f26102b0671dCf8D6357aA2908D6cC80C0559 | Using Chainlink AVAX/USD and USDT/USD |
| AvaxUsdtSwapper             | 0x9Ca03FeBDE38c2C8A2E8F3d74E23a58192Ca921d | Liquidation Swapper                   |
| AvaxUsdtLevSwapper          | 0x8CEe5B335f450933b4720B5b84e6125d4225FB62 | Leverage Swapper                      |
| **MIM/AVAX**                |                                            |                                       |
| MimAvaxCauldron             | 0x2450Bf8e625e98e14884355205af6F97E3E68d07 | 85% LTV .5% initial 1% Interest       |
| MimAvaxProxyOracle          | 0x15f57fbCB7A443aC6022e051a46cAE19491bC298 | Using MimAvaxLPOracle                 |
| MimAvaxLPOracle             | 0x3e6ef9E97147C266c5bddeF03E7dfba7a167d853 | Using MimAvaxLPChainlinkOracleV1      |
| MimAvaxLPChainlinkOracleV1  | 0xE275ec65fDbB4ECF0142b393402eE90D47359fBf | Using MimAvaxOracleV1                 |
| MimAvaxOracleV1             | 0x4437DB9538eb74C7418a1668766536b279C52709 | Using Chainlink AVAX/USD and MIM/USD  |
| MimAvaxSwapper              | 0xBc00ca0d71231c5E23Ba90A90D8C5D9039C39614 | Liquidation Swapper                   |
| MimAvaxLevSwapper           | 0xBA7fd957ad9b7C0238E6E4413dbA69E83224a582 | Leverage Swapper                      |

### Utilities

| Contract             | Address                                    | Note                                                             |
| -------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
| MultichainWithdrawer | 0x2b95bf93B5873c8cB9aE3374e3054736A5b79676 | Withdraw MIM fees from cauldron and bridge to EthereumWithdrawer |

## Boba Network

| Contract | Address                                    | Note |
| -------- | ------------------------------------------ | ---- |
| DegenBox | 0x279D54aDD72935d845074675De0dbcfdc66800a3 |      |

## Moonriver

| Contract | Address                                    | Note |
| -------- | ------------------------------------------ | ---- |
| DegenBox | 0xB734c264F83E39Ef6EC200F99550779998cC812d |      |
