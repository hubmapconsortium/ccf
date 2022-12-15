import { ChooseVersion } from "src/app/components/choose-version/choose-version";
import { PageDataItems } from "src/app/components/page-data/page-data";
import { PageHeaderItems } from "src/app/components/page-header/page-header-items";
import { SopLinks } from "src/app/components/sop-links/sop-links";
import { HeaderData } from "src/app/components/table/header";
import { TableData } from "src/app/components/table/table";

export const omapsHeading: PageHeaderItems[] = [
    {
        image: "assets/images/omaps.svg",
        title: "Organ Mapping Antibody Panels (OMAPs)",
        subtitle: "Validated panels for diverse organs to run multiplexed antibody-based imaging that generates semantic ASCT+B table term annotations"
    }
]

export const overviewData: PageDataItems[] = [
    {
        heading: "Overview",
        descriptions: `Organ Mapping Antibody Panels (OMAPs) are collections of antibodies that allow spatial mapping of the anatomical structures and cell types present in diverse organs using multiplexed antibody-based imaging (<a href="https://www.nature.com/articles/s41592-021-01316-y" target="_blank">Hickey et al, 2021</a>).
        The construction of an OMAP is an iterative, resource intensive process that requires domain expertise in tissue biology, spatial proteomics, and multiplexed imaging (<a href="https://www.nature.com/articles/s41596-019-0206-y" target="_blank">Du et al. 2019</a>, <a href="https://www.nature.com/articles/s41596-021-00644-9" target="_blank">Radtke et al. 2022</a>).
        To overcome these challenges, the Human BioMolecular Atlas Program (HuBMAP) is authoring and publishing OMAPs.
        These community-validated resources directly parallel efforts in the field of flow cytometry to publish Optimized Multicolor Immunofluorescence Panels (OMIPs) (<a href="https://onlinelibrary.wiley.com/doi/10.1002/cyto.a.20916" target="_blank">Mahnke, Chattopadhyay, and Roederer 2010</a>,
        <a href="https://onlinelibrary.wiley.com/doi/10.1002/cyto.a.20959" target="_blank">Roederer and Tárnok 2010</a>). In contrast to existing antibody validation resources such as the
        <a href="https://avr.hubmapconsortium.org/" target="_blank">HuBMAP Antibody Validation Report</a> and <a href="https://www.proteinatlas.org/humanproteome/tissue" target="_blank">Human Protein Atlas</a>, OMAPs additionally provide experimental details relevant for their successful application, e.g., tissue preservation method, imaging method, antigen retrieval conditions, and antibody cycling order.
        The end result is an assembly of expertly curated antibodies that work together in a single tissue section. The panels presented here are authored and reviewed by experts in pathology, tissue biology, and multiplexed imaging. Information on antibody lots and recommended concentrations vary across experiments and, in the case of antibody dilutions, must be empirically determined. 
        <br><br>To facilitate tissue mapping efforts within and beyond the HuBMAP community, OMAPs are designed for integration with the ASCT+B Reporter
        (<a href="https://www.nature.com/articles/s41556-021-00788-6" target="_blank">Börner et al. 2021</a>), a state-of-the-art visualization tool <a href="https://hubmapconsortium.github.io/ccf-asct-reporter" target="_blank">https://hubmapconsortium.github.io/ccf-asct-reporter</a>.
        We strongly encourage inclusion of blood endothelial markers to empower construction of a human reference atlas using the vasculature common coordinate framework (VCCF), originally proposed by Dr. Zorina Galis
        (<a href="https://www.youtube.com/watch?v=ZGYU_dsb0j4&ab_channel=CyberinfrastructureforNetworkScienceCenter%28CNS%29" target="_blank">Galis 2019</a>) and expanded upon here (<a href="https://www.frontiersin.org/articles/10.3389/fcvm.2020.00029/full" target="_blank">Weber, Ju, and Börner 2020</a>) (<a href="https://doi.org/10.1101/2022.02.28.482302" target="_blank">Boppana et al., 2022</a>). 
            We additionally recommend the inclusion of antibodies directed against one or more lymphatic endothelial markers to further our understanding of the “yet to be charted” human lymphatic system 
            (<a href="http://biorxiv.org/content/early/2022/06/05/2022.06.03.494716.abstract" target="_blank">Radtke, Lukacs et al, 2022</a>), 
            <a href="https://www.nhlbi.nih.gov/events/2021/yet-be-charted-mapping-lymphatic-system-across-body-scales-and-expertise-domains" target="_blank">NHLBI, NIH 2021</a>), 
            <a href="https://www.niddk.nih.gov/news/meetings-workshops/2022/yet-to-be-charted-lymphatic-system-in-health-and-disease" target="_blank">National Heart, Lung, and Blood Institute (NHLBI), and National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK), 2022</a>).`
    }
]

export const goalsForOmaps: PageDataItems[] = [
    {
        heading: 'Goals for OMAPs',
        descriptions: `<ul>
        <li>Offset the considerable time (6-8 months) and cost (~$30-60,000 in 2022 USD) associated with creating such resources de novo</li>
        <li>Standardize data acquisition for multiplexed tissue imaging studies</li>
        <li>Empower construction of atlases from healthy and diseased human tissues</li>
        <li>Support the spatial biology community by aggregating highly cited antibody clones</li>
        <li>Identify essential markers for anatomical structures and cell types in diverse human organs</li>
        </ul>`
    }
]

export const sopData: SopLinks[] = [
    {
        urls: 'SOP: Construction of Organ Mapping Antibody Panels for Multiplexed Antibody-Based Imaging of Human Tissues',
        href: 'https://doi.org/10.5281/zenodo.5749883'
    }
]

export const acknowledgementsData: PageDataItems[] = [
    {
        heading: "Acknowledgments",
        descriptions: `We are grateful for engaging and thoughtful discussions from the Affinity Reagent Imaging and Validation and ASCT+B working groups, HuBMAP Consortium.
        This work was supported, in part, by the Intramural Research Program of the NIH, National Institute of Allergy and Infectious Disease and National Cancer Institute.
        This work was also supported by NIH Awards UH3 CA246635 and 1OT2OD026671.`
    },
    {
        heading: "References",
        descriptions: `Börner, Katy, Sarah A. Teichmann, Ellen M. Quardokus, James C. Gee, Kristen Browne, David Osumi-Sutherland, Bruce W. Herr, et al. 2021.
        "<a href="https://doi.org/10.1038/s41556-021-00788-6" target="_blank">Anatomical Structures, Cell Types and Biomarkers of the Human Reference Atlas.</a>" Nature Cell Biology 23 (11): 1117–28.
        <br><br>
        Du, Ziming, Jia-Ren Lin, Rumana Rashid, Zoltan Maliga, Shu Wang, Jon C. Aster, Benjamin Izar, Peter K. Sorger, and Sandro Santagata. 2019.
        “<a href="https://doi.org/10.1038/s41596-019-0206-y" target="_blank">Qualifying Antibodies for Image-Based Immune Profiling and Multiplexed Tissue Imaging.</a>” Nature Protocols 14 (10): 2900–2930.
        <br><br>
        Galis, Zorina S. 2019. <a href="https://www.youtube.com/watch?v=ZGYU_dsb0j4" target="_blank">Common Coordinate Framework (CCF) Workshop Anatomical Mapping: Using the Vasculature for CCF</a>. Indiana University.
        <br><br>
        Galis, Zorina S. 2020. “<a href="https://doi.org/10.3389/fcvm.2020.00127" target="_blank">Editorial: Where Is Waldo: Contextualizing the Endothelial Cell in the Era of Precision Biology.</a>” Frontiers in Cardiovascular Medicine 7.
        <br><br>
        Mahnke, Yolanda, Pratip Chattopadhyay, and Mario Roederer. 2010. “<a href="https://doi.org/10.1002/cyto.a.20916" target="_blank">Publication of Optimized Multicolor Immunofluorescence Panels.</a>” Cytometry. Part A : The Journal of the International Society for Analytical Cytology 77 (9): 814–18.
        <br><br>
        Radtke Andrea J., Chu Colin J, Yaniv Ziv, Yao Li, Marr James, Beuschel Rebecca T, Ichise Hiroshi, et al. 2021. “<a href="https://doi.org/10.5281/zenodo.5244551" target="_blank">Accompanying Dataset for: ‘IBEX: An Iterative Immunolabeling and Chemical Bleaching Method for High-Content Imaging of Diverse Tissues.</a>’” Zenodo.
        <br><br>
        Roederer, Mario, and Attila Tárnok. 2010. “<a href="https://doi.org/10.1002/cyto.a.20959" target="_blank">OMIPs—Orchestrating Multiplexity in Polychromatic Science.</a>” Cytometry Part A 77A (9): 811–12.
        <br><br>
        Weber, Griffin M., Yingnan Ju, and Katy Börner. 2020. “<a href="https://doi.org/10.3389/fcvm.2020.00029" target="_blank">Considerations for Using the Vasculature as a Coordinate System to Map All the Cells in the Human Body.</a>” Frontiers in Cardiovascular Medicine 7: 29.`
    }
]

export const omapsVersionData: ChooseVersion[] = [
    { release: '4th HRA Release (v1.3), December 2022', file: 'omaps_release4.csv', version: '4' },
    { release: '3rd HRA Release (v1.2), June 2022', file: 'omaps_release3.csv', version: '3' },
    { release: '2nd HRA Release (v1.1), December 2021', file: 'omaps_release2.csv', version: '2' }
]

export const columnHeaders: HeaderData[] = [
    {
        columnDef: 'omapId',
        header: 'OMAP ID',
        cell: (element: TableData) => `${element['omapId']}`,
        alignment: "left"
    },
    {
        columnDef: 'organ',
        header: 'Organ',
        cell: (element: TableData) => `<a class="cell-link" href="${element['url'] || 'TODO:Please add a url column to this .csv!'}">${element['organ']}</a>`,
        alignment: "start"
    },
    {
        columnDef: 'tissuePreservationMethod',
        header: 'Tissue Preservation Method',
        cell: (element: TableData) => `${element['tissuePreservationMethod']}`,
        alignment: "start"
    },
    {
        columnDef: 'imagingMethod',
        header: 'Multiplexed antibody-based imaging method',
        cell: (element: TableData) => `${element['imagingMethod']}`,
        alignment: "start"
    },
    {
        columnDef: 'csv',
        header: `Download`,
        cell: (element: TableData) => `<a class="cell-link" href="${element['csv'] || 'TODO:Please add a url column to this .csv!'}">CSV</a> | <a class="cell-link" href="${element['xlsx'] || 'TODO:Please add a url column to this .csv!'}">XLSX</a>`,
        sorting: false,
        isTotalRequired: true
    },
    {
        columnDef: 'as',
        header: '#AS',
        cell: (element: TableData) => `${element['as']}`,
        alignment: "end"
    },
    {
        columnDef: 'ct',
        header: '#CT',
        cell: (element: TableData) => `${element['ct']}`,
        alignment: "end"
    },
    {
        columnDef: 'bp',
        header: '#BP',
        cell: (element: TableData) => `${element['bp']}`,
        alignment: "end"
    },
];

export const displayedColumnsData = columnHeaders.map(h => h.columnDef);
