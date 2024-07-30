import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import Sidebar from "./Sidebar";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Sidebar Component", () => {
  it("fetches and displays user details", async () => {
    const user = {
      name: "John Doe",
      profilePicture: "/logo512.png",
    };

    mockedAxios.get.mockResolvedValueOnce({ data: { name: user.name } });

    render(<Sidebar />);

    await waitFor(() => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByRole("img")).toHaveAttribute(
        "src",
        user.profilePicture
      );
    });
  });
});
