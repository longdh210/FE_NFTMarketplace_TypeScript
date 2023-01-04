/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ExchangeCore, ExchangeCoreInterface } from "../ExchangeCore";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "exchange",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "makerRelayerFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "takerRelayerFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "makerProtocolFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "takerProtocolFee",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "feeRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum ExchangeCore.FeeMethod",
        name: "feeMethod",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum SaleKindInterface.Side",
        name: "side",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum SaleKindInterface.SaleKind",
        name: "saleKind",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "OrderApprovedPartOne",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "enum AuthenticatedProxy.HowToCall",
        name: "howToCall",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "replacementPattern",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "staticTarget",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "staticExtradata",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "basePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "extra",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "listingTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expirationTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "orderbookInclusionDesired",
        type: "bool",
      },
    ],
    name: "OrderApprovedPartTwo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "OrderCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "buyHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "sellHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "metadata",
        type: "bytes32",
      },
    ],
    name: "OrdersMatched",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "INVERSE_BASIS_POINT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minimumMakerProtocolFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minimumTakerProtocolFee",
        type: "uint256",
      },
    ],
    name: "__ExchangeCore_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "approvedOrders",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "cancelledOrFinalized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMinimumMakerProtocolFee",
        type: "uint256",
      },
    ],
    name: "changeMinimumMakerProtocolFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMinimumTakerProtocolFee",
        type: "uint256",
      },
    ],
    name: "changeMinimumTakerProtocolFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newProtocolFeeRecipient",
        type: "address",
      },
    ],
    name: "changeProtocolFeeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "exchangeToken",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumMakerProtocolFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumTakerProtocolFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolFeeRecipient",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "contract ProxyRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "extradata",
        type: "bytes",
      },
    ],
    name: "staticCall",
    outputs: [
      {
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenTransferProxy",
    outputs: [
      {
        internalType: "contract TokenTransferProxy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610958806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a25780638da5cb5b116100715780638da5cb5b14610222578063a25eb5d914610233578063cae6047f14610246578063e57d4adb1461024f578063f2fde38b1461027257600080fd5b8063715018a6146101db5780637b103999146101e35780637ccefc52146101f65780638076f005146101ff57600080fd5b806328a8ee68116100de57806328a8ee681461018b5780634d5458b0146101a2578063514f0330146101b557806364df049e146101c857600080fd5b80630eefdbad1461011057806310796a471461014057806314350c24146101635780631a6b13e214610178575b600080fd5b609954610123906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61015361014e3660046107ab565b610285565b6040519015158152602001610137565b61017661017136600461081f565b61030e565b005b61017661018636600461081f565b610346565b610194609d5481565b604051908152602001610137565b6101766101b0366004610838565b610375565b6101766101c336600461085a565b610450565b609e54610123906001600160a01b031681565b61017661049c565b609854610123906001600160a01b031681565b610194609c5481565b61015361020d36600461081f565b609a6020526000908152604090205460ff1681565b6065546001600160a01b0316610123565b609754610123906001600160a01b031681565b610194609f5481565b61015361025d36600461081f565b609b6020526000908152604090205460ff1681565b61017661028036600461085a565b6104d2565b60008082518451610296919061087c565b67ffffffffffffffff8111156102ae576102ae610708565b6040519080825280601f01601f1916602001820160405280156102d8576020820181803683370190505b509050602081016102e9818561056d565b90506102f5818661056d565b506000604051835160208501895afa9695505050505050565b6065546001600160a01b031633146103415760405162461bcd60e51b8152600401610338906108a2565b60405180910390fd5b609c55565b6065546001600160a01b031633146103705760405162461bcd60e51b8152600401610338906108a2565b609d55565b600054610100900460ff166103905760005460ff1615610394565b303b155b6103f75760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610338565b600054610100900460ff16158015610419576000805461ffff19166101011790555b6104216105b0565b6104296105e7565b612710609f55609c839055609d829055801561044b576000805461ff00191690555b505050565b6065546001600160a01b0316331461047a5760405162461bcd60e51b8152600401610338906108a2565b609e80546001600160a01b0319166001600160a01b0392909216919091179055565b6065546001600160a01b031633146104c65760405162461bcd60e51b8152600401610338906108a2565b6104d06000610616565b565b6065546001600160a01b031633146104fc5760405162461bcd60e51b8152600401610338906108a2565b6001600160a01b0381166105615760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610338565b61056a81610616565b50565b8051600090156105a957815180602001830160208401855b600183831014156105a0578151815260209182019101610585565b50505092909201915b5090919050565b600054610100900460ff166105d75760405162461bcd60e51b8152600401610338906108d7565b6105df610668565b6104d061068f565b600054610100900460ff1661060e5760405162461bcd60e51b8152600401610338906108d7565b6104d06106bf565b606580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166104d05760405162461bcd60e51b8152600401610338906108d7565b600054610100900460ff166106b65760405162461bcd60e51b8152600401610338906108d7565b6104d033610616565b600054610100900460ff166106e65760405162461bcd60e51b8152600401610338906108d7565b60018055565b80356001600160a01b038116811461070357600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261072f57600080fd5b813567ffffffffffffffff8082111561074a5761074a610708565b604051601f8301601f19908116603f0116810190828211818310171561077257610772610708565b8160405283815286602085880101111561078b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000606084860312156107c057600080fd5b6107c9846106ec565b9250602084013567ffffffffffffffff808211156107e657600080fd5b6107f28783880161071e565b9350604086013591508082111561080857600080fd5b506108158682870161071e565b9150509250925092565b60006020828403121561083157600080fd5b5035919050565b6000806040838503121561084b57600080fd5b50508035926020909101359150565b60006020828403121561086c57600080fd5b610875826106ec565b9392505050565b6000821982111561089d57634e487b7160e01b600052601160045260246000fd5b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea2646970667358221220852bc4a0a90cd976ebd192b2a5e98e919c34788b9bc330dac1544e62c281f12f64736f6c634300080b0033";

type ExchangeCoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExchangeCoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExchangeCore__factory extends ContractFactory {
  constructor(...args: ExchangeCoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExchangeCore> {
    return super.deploy(overrides || {}) as Promise<ExchangeCore>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ExchangeCore {
    return super.attach(address) as ExchangeCore;
  }
  connect(signer: Signer): ExchangeCore__factory {
    return super.connect(signer) as ExchangeCore__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExchangeCoreInterface {
    return new utils.Interface(_abi) as ExchangeCoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExchangeCore {
    return new Contract(address, _abi, signerOrProvider) as ExchangeCore;
  }
}