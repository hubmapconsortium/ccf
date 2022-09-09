import { LongCard } from './../../components/card-button-long/long-card';

export const pageTitle = "Human Reference Atlas Data";

export const longButtonItems: LongCard[] = [
    {
        icon: 'assets/images/button1.png',
        title: 'CCF Anatomical Structures, Cell Types and Biomarkers (ASCT+B) Tables',
        body: 'Data tables containing hierarchical anatomical structures, cell types and biomarkers',
        route: 'ccf-anatomical-structures'
    },
    {
        icon: 'assets/images/button2.png',
        title: 'ASCT+B Cell Types Data from Azimuth Reference Data with Summaries',
        body: 'Crosswalks from Azimuth cell annotation tool to ASCT+B tables will cell population data',
        route: 'ccf-anatomical-structures'
    },
    {
        icon: 'assets/images/button3.png',
        title: 'CCF 2D Reference Object Library',
        body: 'Open source 2D illustrations of Functional Tissue Units (FTUs) crosswalked to ASCT+B tables used for single cell data exploration',
        route: 'ccf-2d-reference-library'
    },
    {
        icon: 'assets/images/button4.png',
        title: 'CCF 3D Reference Object Library',
        body: 'Open source 3D organs crosswalked to ASCT+B tables used for tissue registration and exploration',
        route: 'ccf-landing-page'
    },
    {
        icon: 'assets/images/button5.png',
        title: 'Organ Mapping Antibody Panels (OMAPs)',
        body: 'Spatial mapping using the anatomical structures and cell types present in diverse organs using multiplexed antibody-based imaging',
        route: 'ccf-landing-page'
    },
    {
        icon: 'assets/images/button6.png',
        title: 'HuBMAP Data Portal',
        externalLink: 'https://portal.hubmapconsortium.org/',
        body: 'HuBMAP Data Portal is the central resource for discovery, visualization, and download of single-cell tissue data generated by the consortium'
    }
]