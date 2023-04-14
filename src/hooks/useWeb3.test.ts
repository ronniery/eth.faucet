jest.mock("@metamask/detect-provider");

import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  jest,
} from "@jest/globals";
import { renderHook } from "@testing-library/react";
import useWeb3 from "./useWeb3";
import fetchMock from "fetch-mock";

describe("useWeb3/hook", () => {
  const mockRequest = ({
    response,
    contract = `test-contract.json`,
  }: {
    response: Record<string, unknown>;
    contract?: string;
  }) => {
    fetchMock.get(`/contracts/${contract}.json`, response, {
      delay: 300,
    });
  };

  beforeEach(() => {
    mockRequest({
      response: {
        contract: "use-web3.contract",
      },
      contract: `test-contract`,
    });
  });

  afterEach(() => {
    fetchMock.reset();
  });

  it("render custom hook", async () => {
    const { result } = renderHook(() => useWeb3());

    expect(result).toHaveProperty(["current"]);
    expect(result.current).toHaveProperty(["api"]);
    expect(result).toMatchObject({
      current: {
        api: {},
        getContract: expect.any(Function),
      },
    });
  });
});
