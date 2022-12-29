import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

import AvatarGroup, { AvatarGroupProps } from "../AvatarGroup";
import { dataMock } from "Mocks";

const mockProps: AvatarGroupProps = {
  items: dataMock.items,
  size: "md",
  maxLength: 19,
};

describe("default component should render properly", () => {
  test("renders avatar group", () => {
    render(<AvatarGroup {...mockProps} />);
    const element = screen.getByTestId("container-avatar-group-test");
    expect(element).toBeInTheDocument();
  });
});

describe("each props should be test as expected", () => {
  test("props items image should be there", () => {
    render(<AvatarGroup {...mockProps} />);
    expect(screen.getAllByRole("img")[0]).toHaveAttribute(
      "src",
      dataMock.items[0].image
    );
  });

  test("props size should be md", () => {
    render(<AvatarGroup {...mockProps} />);
    expect(screen.getAllByRole("img")[0]).toHaveClass("card-size-md");
  });

  test("props name should be TB", () => {
    render(<AvatarGroup {...mockProps} />);
    expect(screen.getByRole("heading")).toHaveTextContent("TB");
  });
});

describe("capture a component as snapshot file", () => {
  test("renders snapshot correctly", () => {
    const tree = renderer.create(<AvatarGroup {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
