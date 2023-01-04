/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AuthenticatedProxy,
  AuthenticatedProxyInterface,
} from "../AuthenticatedProxy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ReceivedEther",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "ReceivedTokens",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "revoked",
        type: "bool",
      },
    ],
    name: "Revoked",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addrUser",
        type: "address",
      },
      {
        internalType: "contract ProxyRegistry",
        name: "addrRegistry",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "enum AuthenticatedProxy.HowToCall",
        name: "howToCall",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "proxy",
    outputs: [
      {
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "enum AuthenticatedProxy.HowToCall",
        name: "howToCall",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "proxyAssert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "receiveApproval",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "revoked",
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
        internalType: "bool",
        name: "revoke",
        type: "bool",
      },
    ],
    name: "setRevoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upgradeabilityOwner",
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
    name: "user",
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
];

const _bytecode =
  "0x60806040526001805460ff60a01b1916905534801561001d57600080fd5b5061088a8061002d6000396000f3fe6080604052600436106100865760003560e01c80634f8632ba116100595780634f8632ba1461015457806363d256ce1461018c5780636fde8202146101ad5780637b103999146101cb5780638f4ffcb1146101eb57610086565b80631b0f7ba9146100bd5780633f801f91146100f2578063485cc955146101145780634c93505f14610134575b60405134815233907fa419615bc8fda4c87663805ee2a3597a6d71c1d476911d9892f340d965bc7bf19060200160405180910390a2005b3480156100c957600080fd5b506100dd6100d8366004610665565b61020b565b60405190151581526020015b60405180910390f35b3480156100fe57600080fd5b5061011261010d366004610665565b6103aa565b005b34801561012057600080fd5b5061011261012f3660046106cb565b6103c3565b34801561014057600080fd5b5061011261014f366004610712565b61041b565b34801561016057600080fd5b50600254610174906001600160a01b031681565b6040516001600160a01b0390911681526020016100e9565b34801561019857600080fd5b506003546100dd90600160a01b900460ff1681565b3480156101b957600080fd5b506001546001600160a01b0316610174565b3480156101d757600080fd5b50600354610174906001600160a01b031681565b3480156101f757600080fd5b5061011261020636600461072f565b61048a565b6002546000906001600160a01b03163314806102a35750600354600160a01b900460ff161580156102a357506003546040516369dc9ff360e01b81523360048201526001600160a01b03909116906369dc9ff390602401602060405180830381865afa15801561027f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a3919061079b565b6102ac57600080fd5b60008360018111156102c0576102c06107b8565b141561032b57836001600160a01b0316826040516102de91906107fe565b6000604051808303816000865af19150503d806000811461031b576040519150601f19603f3d011682016040523d82523d6000602084013e610320565b606091505b5050809150506103a3565b600183600181111561033f5761033f6107b8565b14156103a357836001600160a01b03168260405161035d91906107fe565b600060405180830381855af49150503d8060008114610398576040519150601f19603f3d011682016040523d82523d6000602084013e61039d565b606091505b50909150505b9392505050565b6103b583838361020b565b6103be57600080fd5b505050565b600154600160a01b900460ff16156103da57600080fd5b6001805460ff60a01b1916600160a01b179055600280546001600160a01b039384166001600160a01b03199182161790915560038054929093169116179055565b6002546001600160a01b0316331461043257600080fd5b60038054821515600160a01b0260ff60a01b199091161790556040517f2165014523a6f4135deffed62d70149aad59b64de5aac51e3abbcbe2a83e2f7e9061047f90831515815260200190565b60405180910390a150565b6040516323b872dd60e01b81526001600160a01b038581166004830152306024830152604482018590528391908216906323b872dd906064016020604051808303816000875af11580156104e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610506919061079b565b6105565760405162461bcd60e51b815260206004820152601b60248201527f455243323020746f6b656e207472616e73666572206661696c65640000000000604482015260640160405180910390fd5b826001600160a01b0316856001600160a01b03167fd65b48fd35864b3528d38e44760be5553248f89bf3ff6b06cca57817cc2650bf868560405161059b92919061081a565b60405180910390a35050505050565b6001600160a01b03811681146105bf57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126105e957600080fd5b813567ffffffffffffffff80821115610604576106046105c2565b604051601f8301601f19908116603f0116810190828211818310171561062c5761062c6105c2565b8160405283815286602085880101111561064557600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561067a57600080fd5b8335610685816105aa565b925060208401356002811061069957600080fd5b9150604084013567ffffffffffffffff8111156106b557600080fd5b6106c1868287016105d8565b9150509250925092565b600080604083850312156106de57600080fd5b82356106e9816105aa565b915060208301356106f9816105aa565b809150509250929050565b80151581146105bf57600080fd5b60006020828403121561072457600080fd5b81356103a381610704565b6000806000806080858703121561074557600080fd5b8435610750816105aa565b9350602085013592506040850135610767816105aa565b9150606085013567ffffffffffffffff81111561078357600080fd5b61078f878288016105d8565b91505092959194509250565b6000602082840312156107ad57600080fd5b81516103a381610704565b634e487b7160e01b600052602160045260246000fd5b60005b838110156107e95781810151838201526020016107d1565b838111156107f8576000848401525b50505050565b600082516108108184602087016107ce565b9190910192915050565b828152604060208201526000825180604084015261083f8160608501602087016107ce565b601f01601f191691909101606001939250505056fea26469706673582212200a1a0f16f28e074a4e96580c70397d27bc32af5ac76aa8084bb8b15ed20cb5d964736f6c634300080b0033";

type AuthenticatedProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AuthenticatedProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AuthenticatedProxy__factory extends ContractFactory {
  constructor(...args: AuthenticatedProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AuthenticatedProxy> {
    return super.deploy(overrides || {}) as Promise<AuthenticatedProxy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AuthenticatedProxy {
    return super.attach(address) as AuthenticatedProxy;
  }
  connect(signer: Signer): AuthenticatedProxy__factory {
    return super.connect(signer) as AuthenticatedProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuthenticatedProxyInterface {
    return new utils.Interface(_abi) as AuthenticatedProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AuthenticatedProxy {
    return new Contract(address, _abi, signerOrProvider) as AuthenticatedProxy;
  }
}