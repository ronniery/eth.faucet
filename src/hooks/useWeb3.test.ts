jest.mock("@metamask/detect-provider")

import { describe, it, expect, beforeEach, afterEach, jest } from "@jest/globals";
import { renderHook, act } from '@testing-library/react'
import useWeb3 from "./useWeb3";
import fetchMock from 'fetch-mock';
import detectEthereumProvider from '@metamask/detect-provider';

describe("useWeb3/hook", () => {

  const mockRequest = ({ response, contract = `test-contract.json` }: { response: Record<string, unknown>, contract?: string }) => {
    fetchMock.get(`/contracts/${contract}.json`, response, {
      delay: 300
    });
  }

  beforeEach(() => {
    mockRequest({
      response: {
        "contract": "use-web3.contract"
      },
      contract: `test-contract`
    });
  })

  afterEach(() => {
    fetchMock.reset();
  })

  it("render custom hook", async () => {
    const { result } = renderHook(() => useWeb3());

    expect(result).toHaveProperty(["current"]);
    expect(result.current).toHaveProperty(["api"]);
    expect(result).toMatchObject({
      current: {
        api: {},
        getContract: expect.any(Function)
      }
    });
  });

  it.skip("checks if given a contract, we will receive a valid output", async () => {
    mockRequest({
      response: {
        abi: [{ "test": "mocking" }],
        networks: {
          1337: {
            address: "0x0001",
          }
        },
      },
      contract: 'test-web3'
    })

    const { result } = renderHook(() => useWeb3());
    const { getContract } = result.current;

    const response = await getContract("test-web3");
    console.log(response);
  }, 5000000)

  it.skip("should return an error because provider was not found", async () => {
    act(() => {
      const output = renderHook(() => useWeb3());
      output.rerender();

      expect(detectEthereumProvider).toHaveBeenCalled()
      expect(detectEthereumProvider).toHaveBeenCalledTimes(1);
      expect(output.result.current).toHaveProperty("error");
      expect(output.result.current.error).toBe(Error);
    });
  })
})