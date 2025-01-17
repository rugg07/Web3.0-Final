# Web3.0 Final Project

Welcome to the **Web3.0 Final Project** repository. This project demonstrates the integration of a React-based client application with Ethereum smart contracts, utilizing modern web development and blockchain technologies.

![App Screenshot] (https://v0-portflio-swvezkk4ikp.vercel.app/Web3.0.png)
---

## Table of Contents

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Prerequisites](#prerequisites)
6. [Installation](#installation)
7. [Usage](#usage)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

---

## Introduction

This project serves as a comprehensive example of a decentralized application (dApp) that connects a React frontend with Ethereum smart contracts. It showcases the capabilities of Web3 technologies in building modern, decentralized web applications.

---

## Project Structure

The repository is organized into two main directories:

- **client**: Contains the React frontend application.
- **smart_contract**: Contains the Ethereum smart contracts and related development tools.

---

## Features

- **Decentralized Application**: A client-side application interacting with Ethereum blockchain.
- **Smart Contracts**: Implementation of smart contracts using Solidity.
- **Blockchain Integration**: Seamless interaction between the frontend and blockchain via MetaMask.

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling for development and build.
- **Ethers.js**: Library for interacting with the Ethereum blockchain.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Hardhat**: Ethereum development environment for compiling, deploying, testing, and debugging smart contracts.
- **Solidity**: Programming language for writing smart contracts.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **MetaMask**: Browser extension for interacting with Ethereum ([Download MetaMask](https://metamask.io/))
- **Git**: Version control system ([Download Git](https://git-scm.com/))

---

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rugg07/Web3.0-Final.git
   cd Web3.0-Final
   ```

2. **Install dependencies for the client**:

   ```bash
   cd client
   npm install
   ```

3. **Install dependencies for the smart contracts**:

   ```bash
   cd ../smart_contract
   npm install
   ```

---

## Usage

1. **Compile and deploy the smart contracts**:

   In the `smart_contract` directory, run:

   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network localhost
   ```

2. **Start the local blockchain**:

   You can use Hardhat's built-in network by running:

   ```bash
   npx hardhat node
   ```

3. **Start the client application**:

   In the `client` directory, run:

   ```bash
   npm run dev
   ```

4. **Connect MetaMask**:

   - Open your browser and navigate to the client application (usually at `http://localhost:3000`).
   - Ensure MetaMask is installed and connected to the same network as your local blockchain.
   - Import the accounts provided by Hardhat into MetaMask for testing.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add feature name"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or suggestions, feel free to contact me through my GitHub profile: [@rugg07](https://github.com/rugg07)

---

Thank you for exploring this project! Your feedback is greatly appreciated. 
