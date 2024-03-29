/* eslint-disable prettier/prettier */
const diagrams =
[
    {
        "id": 101,
        "name": "Flowchart",
        "type": "flow_chart",
        "code": [
            "graph TD",
            "A(Christmas) -->|Get money| C{Let me think}",
            "C -->|One| D[Laptop]",
            "C -->|Two| E[iPhone]",
            "C -->|Three| F[Car]"
        ]
    },
    {
        "id": 102,
        "name": "Class Diagram",
        "type": "class_diagram",
        "code": [
            "classDiagram",
            "Animal <|-- Duck",
            "Animal <|-- Fish",
            "Animal <|-- Zebra",
            "Animal : +int age",
            "Animal : +string gender",
            "Animal : +isMammal()",
            "Animal : +mate()",
            "class Duck {",
            "+string beakColor",
            "+swim()",
            "+quack()",
            "}",
            "class Fish {",
            "-int sizeInFeet",
            "-canEat()",
            "}",
            "class Zebra {",
            "+bool is_wild",
            "+run()",
            "}"
        ]
    },
    {
        "id": 103,
        "name": "Sequence Diagram",
        "type": "sequence_diagram",
        "code": [
            "sequenceDiagram",
            "Alice->>+John: Hello John, how are you?",
            "Alice->>+John: John, can you hear me?",
            "John-->>-Alice: Hi Alice, I can hear you!",
            "John-->>-Alice: I feel great!"
        ]
    },
    {
        "id": 104,
        "name": "ER Diagram",
        "type": "entity_relationship",
        "code": [
            "erDiagram",
            "CUSTOMER }|..|{ DELIVERY-ADDRESS : has",
            "CUSTOMER ||--o{ ORDER : places",
            "CUSTOMER ||--o{ INVOICE : 'liable for'",
            "DELIVERY-ADDRESS ||--o{ ORDER : receives",
            "INVOICE ||--|{ ORDER : covers",
            "ORDER ||--|{ ORDER-ITEM : includes",
            "PRODUCT-CATEGORY ||--|{ PRODUCT : contains",
            "PRODUCT ||--o{ ORDER-ITEM : 'ordered in'"
        ]
    },
    {
        "id": 105,
        "name": "State Diagram",
        "type": "state_diagram",
        "code": [
            "stateDiagram-v2",
            "[*] --> Still",
            "Still --> [*]",
            "Still --> Moving",
            "Moving --> Still",
            "Moving --> Crash",
            "Crash --> [*] "
        ]
    },
    {
        "id": 106,
        "name": "Gantt Chart",
        "type": "gantt_diagram",
        "code": [
            "gantt",
            "title A Gantt Diagram",
            "dateFormat  YYYY-MM-DD",
            "section Section",
            "A task          :a1, 2014-01-01, 30d",
            "Another task     :after a1  , 20d",
            "section Another",
            "Task in sec      :2014-01-12  , 12d",
            "another task     : 24d"
        ]
    },
    {
        "id": 107,
        "name": "Pie Chart",
        "type": "pie_chart",
        "code": [
            "pie title Pets adopted by volunteers",
            "\"Dogs\" : 386",
            "\"Cats\" : 85",
            "\"Rats\" : 15"
        ]
    },
    {
        "id": 108,
        "name": "User Journey",
        "type": "user_journey",
        "code": [
            "journey",
            "title My working day",
            "section Go to work",
            "Make tea: 5: Me",
            "Go upstairs: 3: Me",
            "Do work: 1: Me, Cat",
            "section Go home",
            "Go downstairs: 5: Me"
        ]
    }
];

export default diagrams;
