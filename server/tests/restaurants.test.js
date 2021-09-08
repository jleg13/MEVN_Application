const httpMocks = require("node-mocks-http");
const sinon = require("sinon");
const vld = require("../app/services/restaurantValidation");

const validatorTester = async (validatorArr, mockReq, mockRes, mockNext) => {
  const next = jest.fn();
  for (let i = 0; i < validatorArr.length - 1; i++) {
    await validatorArr[i](mockReq, mockRes, next);
  }
  await validatorArr[validatorArr.length - 1](mockReq, mockRes, mockNext);
  return [mockReq, mockRes, mockNext];
};

describe("Testing restaurant validator", () => {
  describe("validateRestaurantId test", () => {
    let reqMocks;
    let resMocks;
    let nextMocks;

    beforeEach(() => {
      resMocks = httpMocks.createResponse();
      nextMocks = sinon.spy();
    });

    it("Is a valid restaurantId", async () => {
      reqMocks = httpMocks.createRequest({
        params: { restaurantId: "6119de6e65cbdf03670fca42" },
      });
      let test = validatorTester(
        vld.validateRestaurantId,
        reqMocks,
        resMocks,
        nextMocks
      );
      expect(test[2].calledOnce).toBe(true);
    });
    it("Is not a valid restaurantId", async () => {
      reqMocks = httpMocks.createRequest({ params: {} });
      let test = validatorTester(
        vld.validateRestaurantId,
        reqMocks,
        resMocks,
        nextMocks
      );
      expect(test[2].calledOnce).toBe(false);
    });
  });
});
