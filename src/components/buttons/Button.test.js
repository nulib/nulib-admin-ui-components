import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

const mockClickMe = jest.fn();
const buttonTestId = "standard-button";

describe("Button component", () => {
  it("renders a regular button with pass through content", () => {
    const { getByTestId, getByText } = render(
      <Button onClick={mockClickMe} data-testid={buttonTestId}>
        Click me
      </Button>
    );
    const el = getByTestId(buttonTestId);

    expect(el);
    expect(getByText(/click me/i));

    fireEvent.click(el);
    expect(mockClickMe).toHaveBeenCalled();
  });

  it("renders a Primary button", () => {
    const { getByText } = render(<Button isPrimary>Primary button</Button>);
    expect(getByText(/primary button/i)).toHaveClass("is-primary");
  });

  it("renders a Cancel button", () => {
    const { getByText } = render(<Button isText>Cancel button</Button>);
    expect(getByText(/cancel button/i)).toHaveClass("is-text");
  });

  it("renders a Danger button", () => {
    const { getByText } = render(<Button isDanger>Danger button</Button>);

    expect(getByText(/danger button/i)).toHaveClass("is-danger");
  });

  it("renders a Light button", () => {
    const { getByText } = render(<Button isLight>Secondary button</Button>);
    expect(getByText(/secondary button/i)).toHaveClass("is-light");
  });
});
