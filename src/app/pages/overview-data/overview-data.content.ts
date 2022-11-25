import { LongCard } from './../../components/card-button-long/long-card';

export const pageTitle = "Human Reference Atlas Data";

export const longButtonItems: LongCard[] = [
    {
        icon: 'assets/images/asctb_table.svg',
        title: 'Anatomical Structures, Cell Types and Biomarkers (ASCT+B) Tables',
        body: 'Data tables containing hierarchical anatomical structures, cell types and biomarkers',
        route: 'asctb-tables'
    },
    {
        icon: 'assets/images/asctb_azimuth.svg',
        title: 'ASCT+B Cell Types Data from Azimuth Reference Data with Summaries',
        body: 'Crosswalks from Azimuth cell annotation tool to ASCT+B tables will cell population data',
        route: 'ccf-asctb-azimuth'
    },
    {
        icon: 'assets/images/two_dim_library.svg',
        title: '2D Functional Tissue Unit (FTU) Illustrations',
        body: 'Open source 2D illustrations of Functional Tissue Units (FTUs) crosswalked to ASCT+B tables used for single cell data exploration',
        route: 'ccf-2d-ftu'
    },
    {
        icon: 'assets/images/three_dim_library.svg',
        title: '3D Reference Object Library',
        body: 'Open source 3D organs crosswalked to ASCT+B tables used for tissue registration and exploration',
        route: 'ccf-3d-reference-library'
    },
    {
        icon: 'assets/images/omaps.svg',
        title: 'Organ Mapping Antibody Panels (OMAPs)',
        body: 'Spatial mapping using the anatomical structures and cell types present in diverse organs using multiplexed antibody-based imaging',
        route: 'omap'
    },
    {
        icon: 'assets/images/hubmap_data_portal.svg',
        title: 'HuBMAP Data Portal',
        externalLink: 'https://portal.hubmapconsortium.org/',
        body: 'HuBMAP Data Portal is the central resource for discovery, visualization, and download of single-cell tissue data generated by the consortium',
    }
]