interface SemesterMaterials {
    id: string,
    materials: LectureMaterial[],
}

export interface LectureMaterial {
    title: string,
    unitNumber: number,
    links: AnnotatedLink[],
    unlockTime: Date,
}

export interface AnnotatedLink {
    title: string,
    uri: string,
}

export const semesterMaterials: SemesterMaterials[] = [
    {
        id: "SS 2024",
        materials: [
            {
                title: "Ordinary Least Squares (OLS) Demo",
                unitNumber: 1,
                links: [
                    {
                        title: "Desmos",
                        uri: "https://www.desmos.com/calculator/r9fm4syebi?lang=de"
                    }
                ],
                unlockTime: new Date("2024-04-12T16:00:00"),
            },
            {
                title: "Die Kostenfunktion (Animiertes GIF)",
                unitNumber: 1,
                links: [
                    {
                        title: "Gifyu",
                        uri: "https://gifyu.com/image/SnwYe"
                    }
                ],
                unlockTime: new Date("2024-04-12T16:00:00"),
            },
            {
                title: "Mitmachübung: Interaktives Modell eines Perzeptrons",
                unitNumber: 1,
                links: [
                    {
                        title: "Übung",
                        uri: "https://totemi1324.github.io/perzeptron-demo/"
                    }
                ],
                unlockTime: new Date("2024-04-12T17:00:00"),
            },
            {
                title: "Sigmoid vs. ReLU Demo",
                unitNumber: 2,
                links: [
                    {
                        title: "Desmos",
                        uri: "https://www.desmos.com/calculator/lz8h2iejdx"
                    }
                ],
                unlockTime: new Date("2024-04-13T09:00:00"),
            },
            {
                title: "Gradient descent (Animiertes GIF)",
                unitNumber: 2,
                links: [
                    {
                        title: "Gifyu",
                        uri: "https://gifyu.com/image/Snh9O"
                    }
                ],
                unlockTime: new Date("2024-04-13T11:00:00"),
            },
            {
                title: "Mitmachübung: Trainieren eines neuronalen Netzwerks",
                unitNumber: 2,
                links: [
                    {
                        title: "Colab",
                        uri: "https://colab.research.google.com/drive/1HVMc-fIU4gWD0SiswDBzVSRafJzcFyaX?usp=sharing"
                    },
                    {
                        title: "GitHub",
                        uri: "https://github.com/Totemi1324/neural-networks-demo"
                    },
                ],
                unlockTime: new Date("2024-04-13T12:00:00"),
            },
        ]
    }
]