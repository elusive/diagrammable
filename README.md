
![diagrammable logo](public/diagrammable_title.png)

[![.github/workflows/electron.js.yml](https://github.com/elusive/diagrammable/actions/workflows/electron.js.yml/badge.svg?branch=main)](https://github.com/elusive/diagrammable/actions/workflows/electron.js.yml)
# Getting Started with Diagrammable

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The main 
supporting library is [MermaidJs](https://mermaid-js.github.io/mermaid/#/) which helps provide the rendering
of the diagrams from the declared definition. The goal of the application is to provide a standalone implementation
of an editor with supportive features, for diagrams used in software development documentation. 

### The Problem to Solve
Often times when documenting a large software project there can be multiple architecture and detailed design
documents, each having its own set of diagrams. The original diagrams are often not available when the time 
comes to update or edit the document. The developer must then rebuild the diagram from scratch in order to
keep the document up to date (e.g. add a new class to a data model). There is also the parallel issue of what
tool was used to create the diagram as most developers have their own preferences and toolsets. 

### The Solution
The solution to these issues lies in using declarative syntax to define the diagrams in a document. This definiation
can then be saved as *alt text* within the document as a property on the image. Therefore when a change is needed
later in the life of the document the *alt text* contains the definition of the diagram. The user can easily copy
and paste the definition syntax into Diagrammable and the diagram is rendered and ready to edit. No need to find 
the original diagram files and/or download and install the original tool. 

## Supported Diagrams
The large amount of diagrams supported by Diagrammable should make using it for any software document a fairly easy choice. Here is a list of the supported diagrams:

> 1. Flowchart
> 2. Sequence Diagram
> 3. Class Diagram
> 4. State Diagram
> 5. Entity Relationship Diagram
> 6. Use Case Diagram
> 7. Gant Chart
> 8. Pie Chart
> 9. Requirements Diagram


## Running Diagrammable
In order to run the application locally you can simply install it from the artifacts (choose correct one for your pc) on the [Releases]() page. 


## Reviewing or Contributing
If you wish to run from source or develop and contribute to the application you can follow these steps:

1. Install required stack:
    - Node most recent LTS version
    - NPM (installed with Node) or Yarn (installed separately)
    - Text editor of your choice

2. Clone the repository locally:    
    `git clone git@github.com:elusive/diagrammable.git`

3. Open the folder in Visual Studio Code or Neovim or similar in order to view the source tree and the source code organization. The code itself is in the `src` directory, while the static assets are in the `public` directory.

4. Run the application in developer mode:
    ```
    yarn install    # installs the dependencies from NPM
    yarn start      # will run app in a browser window <https://localhost:3000>
    # or
    yarn dev        # will run the app in Electron (and open dev tools)
    ```

5. Once there are tests to run you can execute the tests using this command:
    `yarn test`

## Electron Integration
Electron is an instance of the Chromium browser and Nodejs running in a single process. This allows the use of a web app and a server backend (Node) together in the same application, locally on your desktop. The electron window hosts the web application instance and behaves just like a typical software window.

The process of compiling and packaging the application has been somewhat simplified by the use of the NPM scripts (or Yarn). In order to produce the artifacts for installing the application and its Electron host, you can follow these steps:

    ```
    yarn build
    yarn electron:package:[win|mac|linux]
    ```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

You can learn more about MermaidJs from the [MermaidJs documentation](https://mermaid-js.github.io/mermaid/#/).

You can learn specifically how to create diagrams from the diagram reference available [**here**](https://mermaid-js.github.io/mermaid/#/./n00b-syntaxReference). 

#### Questions
You can email me with questions about the code: me *at* johng *dot* info.

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
