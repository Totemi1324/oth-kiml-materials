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
            uri: "https://www.desmos.com/calculator/r9fm4syebi?lang=de",
          },
        ],
        unlockTime: new Date("2024-04-12T16:00:00"),
      },
      {
        title: "Die Kostenfunktion (Animiertes GIF)",
        unitNumber: 1,
        links: [
          {
            title: "Gifyu",
            uri: "https://gifyu.com/image/SnwYe",
          },
        ],
        unlockTime: new Date("2024-04-12T16:00:00"),
      },
      {
        title: "Mitmachübung: Interaktives Modell eines Perzeptrons",
        unitNumber: 1,
        links: [
          {
            title: "Übung",
            uri: "https://totemi1324.github.io/perzeptron-demo/",
          },
        ],
        unlockTime: new Date("2024-04-12T17:00:00"),
      },
      {
        title: "Sigmoid vs. ReLU Demo",
        unitNumber: 2,
        links: [
          {
            title: "Desmos",
            uri: "https://www.desmos.com/calculator/lz8h2iejdx",
          },
        ],
        unlockTime: new Date("2024-04-13T09:00:00"),
      },
      {
        title: "Gradient descent (Animiertes GIF)",
        unitNumber: 2,
        links: [
          {
            title: "Gifyu",
            uri: "https://gifyu.com/image/Snh9O",
          },
        ],
        unlockTime: new Date("2024-04-13T11:00:00"),
      },
      {
        title: "Mitmachübung: Trainieren eines neuronalen Netzwerks",
        unitNumber: 2,
        links: [
          {
            title: "Colab",
            uri: "https://colab.research.google.com/drive/1HVMc-fIU4gWD0SiswDBzVSRafJzcFyaX?usp=sharing",
          },
          {
            title: "GitHub",
            uri: "https://github.com/Totemi1324/neural-networks-demo",
          },
        ],
        unlockTime: new Date("2024-04-13T11:00:00"),
      },
      {
        title: "Neural Networks (Videoreihe) von 3Blue1Brown",
        unitNumber: 2,
        links: [
          {
            title: "Playlist",
            uri: "https://www.youtube.com/playlist?list=PLgxo3DDiqnvAmMOTzZbgD9d4gtQ9V7Lig",
          },
        ],
        unlockTime: new Date("2024-04-13T13:00:00"),
      },
      {
        title: "Splitting in Decision Trees (Animiertes GIF)",
        unitNumber: 3,
        links: [
          {
            title: "Gifyu",
            uri: "https://gifyu.com/image/SuUcF",
          },
        ],
        unlockTime: new Date("2024-04-19T14:45:00"),
      },
      {
        title: "Demo für DTL-Komplexität",
        unitNumber: 3,
        links: [
          {
            title: "Desmos",
            uri: "https://www.desmos.com/calculator/wlt2aaf15m",
          },
        ],
        unlockTime: new Date("2024-04-19T15:00:00"),
      },
      {
        title: "Flappy Bird-Spielumgebung (Animiertes GIF)",
        unitNumber: 3,
        links: [
          {
            title: "Gifyu",
            uri: "https://gifyu.com/image/SutJz",
          },
        ],
        unlockTime: new Date("2024-04-19T17:00:00"),
      },
      {
        title: "Mitmachübung: Frozen Lake-Game",
        unitNumber: 3,
        links: [
          {
            title: "Übung",
            uri: "https://totemi1324.github.io/q-learning-demo/",
          },
        ],
        unlockTime: new Date("2024-04-19T17:30:00"),
      },
      {
        title: "Support Vector Machines (SVMs) zum Ausprobieren",
        unitNumber: 4,
        links: [
          {
            title: "Demo",
            uri: "https://greitemann.dev/svm-demo",
          },
        ],
        unlockTime: new Date("2024-04-20T09:00:00"),
      },
      {
        title: "Visualisierung k-nearest neighbors (Animiertes GIF)",
        unitNumber: 4,
        links: [
          {
            title: "Gifyu",
            uri: "https://gifyu.com/image/SQbqO",
          },
        ],
        unlockTime: new Date("2024-04-20T09:00:00"),
      },
      {
        title: "K-means Clustering zum Ausprobieren",
        unitNumber: 4,
        links: [
          {
            title: "Interaktiver Graph",
            uri: "https://editor.p5js.org/MaschinenNah/full/Mlpq-o0q8",
          },
        ],
        unlockTime: new Date("2024-04-20T09:00:00"),
      },
      {
        title: "Mitmachübung: Vor- und Nachbereitung eines Datensatzes",
        unitNumber: 4,
        links: [
          {
            title: "Colab",
            uri: "https://colab.research.google.com/drive/1-z1cXOFJMKlvTEWs3W7jldfNBNSFuKMA?usp=sharing",
          },
          {
            title: "GitHub",
            uri: "https://github.com/Totemi1324/neural-networks-demo",
          },
        ],
        unlockTime: new Date("2024-04-20T09:00:00"),
      },
      {
        title: "Fashion-MNIST Inspektor",
        unitNumber: 5,
        links: [
          {
            title: "KnowYourData",
            uri: "https://knowyourdata-tfds.withgoogle.com/#tab=STATS&dataset=fashion_mnist",
          },
        ],
        unlockTime: new Date("2024-04-26T14:30:00"),
      },
      {
        title: "Kernels zum Ausprobieren",
        unitNumber: 5,
        links: [
          {
            title: "Filterlabor",
            uri: "https://editor.p5js.org/MaschinenNah/full/PZYCjAsie",
          },
        ],
        unlockTime: new Date("2024-04-26T15:00:00"),
      },
      {
        title: "CNN Explainer",
        unitNumber: 5,
        links: [
          {
            title: "Übung",
            uri: "https://poloclub.github.io/cnn-explainer/",
          },
        ],
        unlockTime: new Date("2024-04-26T15:00:00"),
      },
      {
        title: "Das LSTM-Modul (Animiertes GIF)",
        unitNumber: 6,
        links: [
          {
            title: "Gifyu",
            uri: "https://gifyu.com/image/SQWlT",
          },
        ],
        unlockTime: new Date("2024-04-27T09:00:00"),
      },
      {
        title: "Attention und Transformers (Videoreihe) von StatQuest",
        unitNumber: 6,
        links: [
          {
            title: "Playlist",
            uri: "https://www.youtube.com/watch?v=PSs6nxngL6k&list=PLgxo3DDiqnvA72eCg3Feqn0D7ooEu1lgB&index=3",
          },
        ],
        unlockTime: new Date("2024-04-27T09:00:00"),
      },
      {
        title: "Image-2-Image Demo",
        unitNumber: 6,
        links: [
          {
            title: "Interaktive GANs",
            uri: "https://affinelayer.com/pixsrv/index.html",
          },
        ],
        unlockTime: new Date("2024-04-27T09:00:00"),
      },
      {
        title: "Text Generation Web-UI (Open source-Textgenerator)",
        unitNumber: 6,
        links: [
          {
            title: "GitHub",
            uri: "https://github.com/oobabooga/text-generation-webui",
          },
          {
            title: "HuggingFace Modell",
            uri: "https://huggingface.co/TheBloke/Llama-2-13B-chat-GGUF",
          },
        ],
        unlockTime: new Date("2024-04-27T09:00:00"),
      },
      {
        title: "Fooocus (Open source-Bildgenerator)",
        unitNumber: 6,
        links: [
          {
            title: "GitHub",
            uri: "https://github.com/lllyasviel/Fooocus",
          },
          {
            title: "HuggingFace Modell",
            uri: "https://huggingface.co/RunDiffusion/Juggernaut-XL-v9",
          },
          {
            title: "CivitAI",
            uri: "https://civitai.com/models/133005/juggernaut-xl",
          },
        ],
        unlockTime: new Date("2024-04-27T09:00:00"),
      },
      {
        title: "Data Labeling-Simulation",
        unitNumber: 6,
        links: [
          {
            title: "Label Studio",
            uri: "https://labelstud.io/playground/",
          },
        ],
        unlockTime: new Date("2024-04-27T09:00:00"),
      },
      {
        title: "Machine Learning-Glossar",
        unitNumber: 6,
        links: [
          {
            title: "Google Developers",
            uri: "https://developers.google.com/machine-learning/glossary",
          },
        ],
        unlockTime: new Date("2024-04-27T09:00:00"),
      },
    ],
  },
];