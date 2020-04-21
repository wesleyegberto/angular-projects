import { LogicTestingComponent } from './logic-testing.component';

describe('ConstructionComponentComponent', () => {
  let mockedService;

  let component: LogicTestingComponent;

  beforeEach(() => {
    /**
     * as our component has a dependency to a service, first we need to
     * create the mock
     */
    mockedService =  jasmine.createSpyObj(['getMagicNumber']);

    /**
     * we create the component that we want to test passing the mocked service
     */
    component = new LogicTestingComponent(mockedService);
  });

  it('should generate the correct message', () => {
    // Scenario: we prepare our test with the needed states
    mockedService.getMagicNumber.and.returnValue(1337);

    // Action: we execute the logic we want to test
    component.someLogic();

    // Assertion: we test the expected output
    expect(component.generatedMessage).toBe('Your lucky number is: 1337');
  });
});
