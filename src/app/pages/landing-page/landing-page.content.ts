import { SectionCardItems } from './../../components/section-card/section-card-items';
import { SliderItems } from './../../components/carousel/slider-items';


export const title = 'Human Reference Atlas';
export const subtitle = '3D Multiscale Biomolecular Human Reference Atlas Construction, Visualization and Usage'
export const cardsHeading = 'Explore the Human Reference Atlas'

export const carouselInfo: SliderItems[] = [
    {
        title: "Map the human body at single cell resolution",
        body: "Learn more about the thousands of experts building a Human Reference Atlas.",
        image: "assets/images/carousel1.svg",
        url: "https://www.biorxiv.org/content/10.1101/2021.05.31.446440v2"
    },
    {
        title: "Contribute data to the Human Reference Atlas",
        body: "Register your data spatially using the Registration User Interface tool.",
        image: "assets/images/carousel2.svg",
        route: 'ccf-registration-user-interface'
    },
    {
        title: "Compare data to the Human Reference Atlas",
        body: "Use the ASCT+B Reporter tool to explore data in the context of the Human Reference Atlas",
        image: "assets/images/carousel3.svg",
        route: 'ccf-asctb-reporter'
    },
    {
        title: "Search for a cell type, gene, or protein",
        body: "Explore cell type populations with via Cell Type Population graph tool.",
        image: "assets/images/carousel4.svg",
        route: "ccf-cell-population-graphs"
    },
    {
        title: "Search for data across levels-from the whole body down to single cells",
        body: "Explore Human Reference Atlas data with the Exploration User Interface tool.",
        image: "assets/images/carousel5.svg",
        route: 'ccf-exploration-user-interface'
    },
    {
        title: "Learn more about the Human BioMolecular Atlas Program",
        body: "Explore HuBMAP data, code, and documentation using the HuBMAP Data Portal.",
        image: "assets/images/carousel6.svg",
        url: "https://portal.hubmapconsortium.org/"
    }
]
export const cards: SectionCardItems[] = [
    {
        title: "Data", description: 'Research the data using Human Reference Atlas',
        image: 'assets/images/data_png.png',
        gif: 'assets/images/data_gif.gif',
        route: 'ccf-overview-data'

    },
    {
        title: 'CCF Ontology', description: 'Discover the Common Cooordinate Framework Ontology',
        image: 'assets/images/ontology_png.png',
        gif: 'assets/images/ontology_gif.gif',
        route: 'ccf-ontology'
    },
    {
        title: "Tools", description: 'Construct, Visualize, and use the tools of the Human Reference Atlas',
        image: 'assets/images/tools_png.png',
        gif: 'assets/images/tools_gif.gif',
        route: 'ccf-overview-tools'
    },
    {
        title: "Training and Outreach", description: 'Checkout HuBMAP`s education and engagement efforts',
        image: 'assets/images/training-outreach_png.png',
        gif: 'assets/images/training-outreach.gif',
        route: 'ccf-overview-training-outreach'
    }
]
