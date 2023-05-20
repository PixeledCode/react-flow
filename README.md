# React Flow

The purpose of the application is to provide the ability to create flow diagrams for a Chatbot application.

## Installation

To get started with this application, you will need to follow these steps:

1. Clone the repository: `git clone https://github.com/PixeledCode/react-flow.git`
2. Install dependencies: `pnpm install`
3. Start the development server: `pnpm run dev`
4. Open the application in your browser at http://localhost:5173

## Usage

The application allows users to create flow diagrams. The user can create multiple nodes and connect them with edges. Each node can be customized with a label.

## Features

Some of the key features of the application include:

- Nodes: Create Multiple Nodes.
- Edges: Create Edges between Nodes.
- Nodes Panel: Create Nodes from a list of available Nodes.
- Settings Panel: Change the settings of the a Node.
- Save Button: Throws an error if the graph is not valid.

## Add a new Node

Currently, the application only supports a single type of Node (Text). To add a new Node, you will need to follow these steps:

1. Create a new file in the `src/components/nodes` directory for a new type of node.
2. Create a new file in the `src/components/panel` directory for a new setting panel.
3. Add the new Node to the `nodeTypes` object in the `src/config/site` file.
4. Add the new panel to the `getPanel` function in the `src/components/panel` file.
5. Add the update logic for the new Node in the zustand store in `src/config/store`.

## Contributing

Contributions to this project are always welcome. Here are some ways you can contribute:

- Test the application and report any bugs or issues
- Suggest new features or improvements
- Submit a pull request with bug fixes or new features

When contributing to this repository, please first discuss the change you wish to make via issue, email or any other communication method before making a change.

## License

This application is licensed under the MIT License. Feel free to use and modify the code for personal or commercial use.
