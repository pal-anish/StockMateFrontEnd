import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../Components/About/About";
import { BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';

describe("About component", () => {
  test("renders header", () => {
    render(<Router><About /></Router>);
    const headerElement = screen.getByText(/STOCKMATE APP/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("renders project description", () => {
    render(<Router><About /></Router>);
    const descriptionElement = screen.getByText(/An application which helps us to learn more about different stocks easily/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders backend technologies", () => {
    render(<Router><About /></Router>);
    const javaIcon = screen.getByTestId("java-icon");
    const springBootIcon = screen.getByTestId("spring-boot-icon");
    const mysqlIcon = screen.getByTestId("mysql-icon");
    const postmanIcon = screen.getByTestId("postman-icon");

    expect(javaIcon).toBeInTheDocument();
    expect(springBootIcon).toBeInTheDocument();
    expect(mysqlIcon).toBeInTheDocument();
    expect(postmanIcon).toBeInTheDocument();
  });

  test("renders frontend technologies", () => {
    render(<Router><About /></Router>);
    const reactIcon = screen.getByTestId("react-icon");
    const html5Icon = screen.getByTestId("html5-icon");
    const css3Icon = screen.getByTestId("css3-icon");
    const javascriptIcon = screen.getByTestId("javascript-icon");

    expect(reactIcon).toBeInTheDocument();
    expect(html5Icon).toBeInTheDocument();
    expect(css3Icon).toBeInTheDocument();
    expect(javascriptIcon).toBeInTheDocument();
  });

  test("renders developer information", () => {
    render(<Router><About /></Router>);
    const profileImage = screen.getByAltText(/Profile Image/i);
    const developerName = screen.getByText(/Anish Pal/i);
    const jobTitle = screen.getByText(/Programmer Analyst/i);
    const emailLink = screen.getByText(/Anish.Pal@cognizant.com/i);

    expect(profileImage).toBeInTheDocument();
    expect(developerName).toBeInTheDocument();
    expect(jobTitle).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();
  });

  test("renders personal links", () => {
    render(<Router><About /></Router>);
    const githubLink = screen.getByTestId("github-link");
    const linkedinLink = screen.getByTestId("linkedin-link");

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });
});
