import { FocusKeyManager } from "@angular/cdk/a11y";
import { ChooseVersion } from "src/app/components/choose-version/choose-version";
import { PageDataItems } from "src/app/components/page-data/page-data";
import { PageHeaderItems } from "src/app/components/page-header/page-header-items";
import { SopLinks } from "src/app/components/sop-links/sop-links";
import { VersionOrgans } from "src/app/components/two-dim-image/two-dim-image";

export const headerData: PageHeaderItems[] = [
    {
        image: 'assets/images/three_dim_library.svg',
        title: 'CCF 3D Reference Object Library',
        subtitle: 'Open source 3D organs crosswalked to ASCT+B tables used for tissue registration and exploration'
    }
]

export const overviewData: PageDataItems[] = [
    {
        heading: "Overview",
        descriptions: `The CCF 3D Reference Object Library provides anatomically correct reference organs. The organs are developed by a specialist in 3D medical illustration and approved by organ experts.
        <br><br>Initially, reference objects are created using data from the Visible Human male and female datasets provided by the National Library of Medicine. The male dataset comprises 1,871 cross-sections at 1mm intervals for both CT and anatomical images at a resolution of 4,096 pixels by 2,700 pixels. The female data set has the same characteristics as the Visible Human Male but axial anatomical images were obtained at 0.33 mm intervals resulting in 5,189 cross-section anatomical images. The male was white, 180.3 cm (71 inch) tall, 199-pound and was 38 years old. The female was white, 171.2 cm (67.4 inch) tall, obese, and 59 years old.
        <br><br>On March 12, 2021, a total of 11 reference organs became available in GLB format. Each organ can be viewed and explored using free web browsers such as Babylon.js. Screenshots and major properties of the nested reference organ objects are given in the table below.
        <br><br>For selected organs, 3D extraction site objects are provided. Some extraction sites resemble geometric objects (e.g., cuboids for heart) while others take the shape of one or more whole or partial anatomical structures (e.g., in spleen). The 3D extraction sites do not restrict registration to specific regions, instead they provide “expert defined landmarks” to help guide tissue registration. The extraction site objects are also used for automatic semantic annotation of tissue samples via collision detection during registration.`
    }
]

export const versionData: ChooseVersion[] = [
    { release: '3nd Release, June 2022', version: '1.2' },
    { release: '2nd Release, December 2021', version: '1.1' },
    { release: '1st Release, March 2021', version: '1.0' },
]

export const sopData: SopLinks[] = [
    {
        urls: 'SOP: 3D Reference Object Approval',
        href: 'https://doi.org/10.5281/zenodo.5944196',
    },
    {
        urls: 'SOP: Using 3D Reference Objects',
        href: 'https://doi.org/10.5281/zenodo.5639651'
    },
    {
        urls: 'SOP: Using the CCF Registration User Interface',
        href: 'https://doi.org/10.5281/zenodo.5575776',
    },
    {
        urls: 'SOP: Assigning RUI Data to Multiple Tissue Blocks',
        href: 'https://doi.org/10.5281/zenodo.5746143'
    }
]
export const termsOfUseData: PageDataItems[] = [
    {
        heading: 'Terms of Use',
        descriptions: `HuBMAP data are supplied with no warranties, expressed or implied, including without limitation, any warranty of merchantability or fitness for a particular purpose or non-infringement. 
        No warranty with respect to the HuBMAP infrastructure is provided, including without limitation, any uptime warranty. 
        The Parties make no representations that the use of the data will not infringe any patent or proprietary rights of third parties.`
    },
    {
        heading: 'License',
        descriptions: `All CCF 3D reference objects are released under 
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Attribution 4.0 International (CC BY 4.0)</a>.`
    },
    {
        heading: 'Citation',
        descriptions: `If you use the data files v1.0 release, please cite this effort as follows:
        Browne, K., Cross, L. E., Herr II, B. W., Record, L, Quardokus, E, Bueckle, A., Börner, K. (2021). HuBMAP CCF 3D Reference Object Library. https://hubmapconsortium.github.io/ccf/pages/ccf-3d-reference-library.html. Accessed on March 12, 2021.
        <br><br>
        If you use the data files v1.1 release, please cite this effort as follows:
        Browne, K., Cross, L. E., Herr II, B. W., Record, L, Quardokus, E, Bueckle, A., Börner, K. (2021). HuBMAP CCF 3D Reference Object Library. https://hubmapconsortium.github.io/ccf/pages/ccf-3d-reference-library.html. Accessed on December 1, 2021.`
    },
    {
        heading: 'Acknowledgements',
        descriptions: `The 3D Models were created by Kristen Browne for the 3D Printing and Biovisualization program operated by OCICB, NIAID.
        This research has been funded in part by the NIH Common Fund through the Office of Strategic Coordination/Office of the NIH Director under award OT2OD026671, by the NIDDK Kidney Precision Medicine Project grant U2CDK114886, and NIAID under BCBB Support Services Contract HHSN316201300006W/HHSN27200002 to MSC, Inc; U.S.<br><br>
        The male colon is from a white 55-year-old and was provided by Arie Kaufman, Stony Brook University.<br><br> The brain is from a 34-year-old female donor and was published by the Allen Human Reference Atlas–3D, 2020. Jim Gee, University of Pennsylvania converted the NII file into GLB. Amy Bernard, Allen Institute assisted in mapping the 141 anatomical structures to the brain ASCT+B table.`
    },
    {
        heading: 'References',
        descriptions: `Börner, Katy, Sarah A. Teichmann, Ellen M. Quardokus, James C. Gee, Kristen Browne, David Osumi-Sutherland, Bruce W. Herr, et al. 2021. “<a href="https://doi.org/10.1038/s41556-021-00788-6" target="_blank">Anatomical Structures, Cell Types and Biomarkers of the Human Reference Atlas.</a>” Nature Cell Biology 23 (11): 1117-28.<br><br>
        Ding, Song-Lin, Joshua J. Royall, Susan M. Sunkin, Lydia Ng, Benjamin A. C. Facer, Phil Lesnar, Angie Guillozet-Bongaarts, Bergen McMurray, Aaron Szafer, Tim A. Dolbeare, Allison Stevens, Lee Tirrell, Thomas Benner, Shiella Caldejon, Rachel A. Dalley, Nick Dee, Christopher Lau, Julie Nyhus, Melissa Reding, Zackery L. Riley, David Sandman, Elaine Shen, Andre van der Kouwe, Ani Varjabedian, Michelle Wright, Lilla Zöllei, Chinh Dang, James A. Knowles, Christof Koch, John W. Phillips, Nenad Sestan, Paul Wohnoutka, H. Ronald Zielke, John G. Hohrmann, Allan R. Jones, Amy Bernard, Michael J. Hawrylycz, Patrick R. Hof, Bruce Fischl, and Ed S. Lein. 2016. 
        "<a href="https://pubmed.ncbi.nlm.nih.gov/27418273/" target="_blank">Comprehensive Cellular-Resolution Atlas of the Adult Human Brain.</a>" Journal of Comparative Neurology 524 (16): 3127-348. doi:10.1002/cne.24080.<br><br>
        Ding, Song-Lin, Joshua J. Royall, Susan M. Sunkin, Benjamin A.C. Facer, Phil Lesnar, Amy Bernard, Lydia Ng, and Ed S. Lein. 2020. <a href="https://community.brain-map.org/t/allen-human-reference-atlas-3d-2020-new/405" target="_blank">Allen Human Reference Atlas - 3D, 2020</a>. RRID:SCR_017764, version 1.0.0.<br><br>
        U.S. National Library of Medicine. 2021. <a href="https://www.nlm.nih.gov/databases/download/vhp.html" target="_blank"><i>Visible Human Project Data</i></a>.`
    }
]

export const threeDimOrganInfo: VersionOrgans[] = [
    {
        version: '1.2',
        organData: [
            {
                name: 'Allen Brain',
                image: 'assets/images/allen_brain.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/brain-female.html',
                    alt: 'The Allen brain, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/Allen_F_Brain.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/brain-male.html',
                    alt: 'The Allen brain, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/Allen_M_Brain.glb'
                }]
            },
            {
                name: 'Blood Vasculature',
                image: 'assets/images/blood_vasculature.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/blood-vasculature-female.html',
                    alt: 'The Vasculature, blood, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Blood_Vasculature.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/blood-vasculature-male.html',
                    alt: 'The Vasculature, blood, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Blood_Vasculature.glb'
                }]
            },
            {
                name: 'Bone Marrow',
                image: 'assets/images/bone_marrow.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/pelvis-female.html',
                    alt: 'The pelvis, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Pelvis.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/pelvis-male.html',
                    alt: 'The pelvis, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Pelvis.glb'
                }]
            },
            {
                name: 'Eye',
                image: 'assets/images/eye.svg',
                tissueData: [{
                    name: 'Female, L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/eye-female-left.html',
                    alt: 'Eye, Female, L',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Eye_L.glb'
                }, {
                    name: 'Female, R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/eye-female-right.html',
                    alt: 'Eye, Female, R',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Eye_R.glb'
                }, {
                    name: 'Male, L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/eye-male-left.html',
                    alt: 'Eye, Male, L',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Eye_L.glb'
                }, {
                    name: 'Male, R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/eye-male-right.html',
                    alt: 'Eye, Male, R',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Eye_R.glb'
                }]
            },
            {
                name: 'Fallopian Tube',
                image: 'assets/images/fallopian_tube.svg',
                tissueData: [{
                    name: 'Female, L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/fallopian-tube-female-left.html',
                    alt: 'Fallopian tube, female, left',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Fallopian_Tube_L.glb'
                }, {
                    name: 'Female, R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/fallopian-tube-female-right.html',
                    alt: 'Fallopian tube, female, left',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Fallopian_Tube_R.glb'
                }]
            },
            {
                name: 'Heart',
                image: 'assets/images/heart.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/heart-female.html',
                    alt: 'The heart, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Heart.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/heart-male.html',
                    alt: 'The heart, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Heart.glb'
                }]
            },
            {
                name: 'Kidney',
                image: 'assets/images/kidney.svg',
                tissueData: [{
                    name: 'Female, L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/kidney-female-left.html',
                    alt: 'The kidney, left, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Kidney_L.glb'
                }, {
                    name: 'Female, R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/kidney-female-right.html',
                    alt: 'The kidney, right, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Kidney_R.glb'
                }, {
                    name: 'Male, L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/kidney-male-left.html',
                    alt: 'The kidney, left, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Kidney_L.glb'
                }, {
                    name: 'Male, R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/kidney-male-right.html',
                    alt: 'The kidney, right, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Kidney_R.glb'
                }]
            },
            {
                name: 'Knee',
                image: 'assets/images/knee.svg',
                tissueData: [{
                    name: 'Female, L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/knee-female-left.html',
                    alt: 'The knee, left, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Knee_L.glb'
                }, {
                    name: 'Female, R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/knee-female-right.html',
                    alt: 'The knee, right, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Knee_R.glb'
                }, {
                    name: 'Male, L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/knee-male-left.html',
                    alt: 'The knee, left, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Knee_L.glb'
                }, {
                    name: 'Male, R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/knee-male-right.html',
                    alt: 'The knee, right, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Knee_R.glb'
                }]
            },
            {
                name: 'Large Intestine',
                image: 'assets/images/large_intestine.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/large-intestine-female.html',
                    alt: 'The large intestine, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/SBU_F_Intestine_Large.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/large-intestine-male.html',
                    alt: 'The large intestine, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/SBU_M_Intestine_Large.glb'
                }]
            },
            {
                name: 'Liver',
                image: 'assets/images/liver.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/liver-female.html',
                    alt: 'Liver, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Liver.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/liver-male.html',
                    alt: 'Liver, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Liver.glb'
                }]
            },
            {
                name: 'Lungs',
                image: 'assets/images/lungs.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/lung-female.html',
                    alt: 'The Lungs, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Lung.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/lung-male.html',
                    alt: 'The Lungs, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Lung.glb'
                }]
            },
            {
                name: 'Lymph Node',
                image: 'assets/images/lymph_node.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/lymph-node-female.html',
                    alt: 'The lymph nodes, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/NIH_F_Lymph_Node.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/lymph-node-male.html',
                    alt: 'The lymph nodes, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/NIH_M_Lymph_Node.glb'
                }]
            },
            {
                name: 'Ovary',
                image: 'assets/images/ovary.svg',
                tissueData: [{
                    name: 'Female L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/ovary-female-left.html',
                    alt: 'The ovary, female, left',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Ovary_L.glb'
                }, {
                    name: 'Female R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/ovary-female-right.html',
                    alt: 'The ovary, female, right',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Ovary_R.glb'
                }]
            },
            {
                name: 'Pancreas',
                image: 'assets/images/pancreas.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/pancreas-female.html',
                    alt: 'The pancreas, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Pancreas.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/pancreas-male.html',
                    alt: 'The pancreas, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Pancreas.glb'
                }]
            },
            {
                name: 'Placenta',
                image: 'assets/images/placenta.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/placenta-female.html',
                    alt: 'The placenta, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Placenta.glb'
                }]
            },
            {
                name: 'Prostate',
                image: 'assets/images/prostate.svg',
                tissueData: [{
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/prostate-male.html',
                    alt: 'The prostate, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Prostate.glb'
                }]
            },
            {
                name: 'Skin',
                image: 'assets/images/skin.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/skin-female.html',
                    alt: 'The skin, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Skin.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/skin-male.html',
                    alt: 'The skin, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Skin.glb'
                }]
            },
            {
                name: 'Small Intestine',
                image: 'assets/images/small_intestine.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/skin-female.html',
                    alt: 'The small intestine, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Small_Intestine.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/small-intestine-male.html',
                    alt: 'The small intestine, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Small_Intestine.glb'
                }]
            },
            {
                name: 'Spinal Cord',
                image: 'assets/images/spinal_cord.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/spinal-cord-female.html',
                    alt: 'The spinal cord, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Spinal_Cord.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/spinal-cord-male.html',
                    alt: 'The spinal cord, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Spinal_Cord.glb'
                }]
            },
            {
                name: 'Spleen',
                image: 'assets/images/spleen.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/spleen-female.html',
                    alt: 'The spleen, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Spleen.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/spleen-male.html',
                    alt: 'The spleen, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Spleen.glb'
                }]
            },
            {
                name: 'Thymus',
                image: 'assets/images/thymus.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/thymus-female.html',
                    alt: 'The thymus, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Thymus.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/thymus-male.html',
                    alt: 'The thymus, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Thymus.glb'
                }]
            },
            // TO DO THIS.
            {
                name: 'Ureter',
                image: 'assets/images/ureter.svg',
                tissueData: [{
                    name: 'Female L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/ureter-female-left.html',
                    alt: 'The ureter, left, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Ureter_L.glb'
                }, {
                    name: 'Female R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/ureter-female-right.html',
                    alt: 'The ureter, right, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Ureter_R.glb'
                }, {
                    name: 'Male L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/ureter-male-left.html',
                    alt: 'The ureter, left, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Ureter_L.glb'
                }, {
                    name: 'Male R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/ureter-male-right.html',
                    alt: 'The ureter, right, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Ureter_R.glb'
                }
                ]
            },
            // TILL HERE.
            {
                name: 'Urinary Bladder',
                image: 'assets/images/urinary_bladder.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/urinary-bladder-female.html',
                    alt: 'The urinary bladder, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Urinary_Bladder.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/urinary-bladder-male.html',
                    alt: 'The urinary bladder, male',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_M_Urinary_Bladder.glb'
                }]
            },
            {
                name: 'Uterus',
                image: 'assets/images/uterus.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/uterus-female.html',
                    alt: 'The uterus, female',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/models/VH_F_Uterus.glb'
                }]
            },
            {
                name: 'All Organs',
                image: 'assets/images/all_organs.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/vh-female-united.html',
                    alt: 'All organs, female',
                    threeDimImage: 'https://ccf-ontology.hubmapconsortium.org/objects/v1.2/VH_F_United.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/ref-organs/vh-male-united.html',
                    alt: 'All organs, male',
                    threeDimImage: 'https://ccf-ontology.hubmapconsortium.org/objects/v1.2/VH_M_United.glb'
                }]
            }]

    },
    {
        version: '1.1',
        organData: [
            {
                name: 'Allen Brain',
                image: 'assets/images/allen_brain.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/brain-female.html',
                    alt: 'The Allen brain, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/Allen_F_Brain.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/brain-male.html',
                    alt: 'The Allen brain, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/Allen_M_Brain.glb'
                }]
            },
            {
                name: 'Blood Vasculature',
                image: 'assets/images/blood_vasculature.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/blood-vasculature-female.html',
                    alt: 'The lymph nodes, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Blood_Vasculature.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/blood-vasculature-male.html',
                    alt: 'The lymph nodes, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Blood_Vasculature.glb'
                }]
            },
            {
                name: 'Bone Marrow & Blood/Pelvis',
                image: 'assets/images/bone_marrow.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/pelvis-female.html',
                    alt: 'The pelvis, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Pelvis.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/pelvis-male.html',
                    alt: 'The pelvis, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Pelvis.glb'
                }]
            },
            {
                name: 'Eye',
                image: 'assets/images/eye.svg',
                tissueData: [{
                    name: 'Female, L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/eye-female-left.html',
                    alt: 'Eye, Female, L',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/models/VH_F_Eye_L.glb'
                }, {
                    name: 'Female, R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/eye-female-right.html',
                    alt: 'Eye, Female, R',
                    threeDimImage: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/models/VH_F_Eye_R.glb'
                }, {
                    name: 'Male, L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/eye-male-left.html',
                    alt: 'Eye, Male, L',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Eye_L.glb'
                }, {
                    name: 'Male, R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/eye-male-right.html',
                    alt: 'Eye, Male, R',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Eye_R.glb'
                }]
            },
            {
                name: 'Fallopian Tube',
                image: 'assets/images/fallopian_tube.svg',
                tissueData: [{
                    name: 'Female, L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/fallopian-tube-female-left.html',
                    alt: 'Fallopian tube, female, left',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Fallopian_Tube_L.glb'
                }, {
                    name: 'Female, R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/fallopian-tube-female-right.html',
                    alt: 'Fallopian tube, female, left',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Fallopian_Tube_R.glb'
                }]
            },
            {
                name: 'Heart',
                image: 'assets/images/heart.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/heart-female.html',
                    alt: 'The heart, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Heart.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/heart-male.html',
                    alt: 'The heart, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Heart.glb'
                }]
            },
            {
                name: 'Kidney',
                image: 'assets/images/kidney.svg',
                tissueData: [
                    {
                        name: 'Female L',
                        image: '',
                        expandedImage: '',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/kidney-female-left.html',
                        alt: 'The kidney, left, female',
                        threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Kidney_L.glb'
                    },
                    {
                        name: 'Female R',
                        image: '',
                        expandedImage: '',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/kidney-female-right.html',
                        alt: 'The kidney, right, female',
                        threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Kidney_R.glb'
                    },
                    {
                        name: 'Male L',
                        image: '',
                        expandedImage: '',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/kidney-male-left.html',
                        alt: 'The kidney, left, male',
                        threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Kidney_L.glb'
                    },
                    {
                        name: 'Male R',
                        image: '',
                        expandedImage: '',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/kidney-male-right.html',
                        alt: 'The kidney, right, male',
                        threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Kidney_R.glb'
                    }
                ]
            }, {
                name: 'Knee',
                image: 'assets/images/knee.svg',
                tissueData: [
                    {
                        name: 'Female L',
                        image: '',
                        expandedImage: '',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/knee-female-left.html',
                        alt: 'The knee, left, female',
                        threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Knee_L.glb'
                    },
                    {
                        name: 'Female R',
                        image: '',
                        expandedImage: '',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/knee-female-right.html',
                        alt: 'The knee, right, female',
                        threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Knee_R.glb'
                    },
                    {
                        name: 'Male L',
                        image: '',
                        expandedImage: '',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/knee-male-left.html',
                        alt: 'The knee, left, male',
                        threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Knee_L.glb'
                    },
                    {
                        name: 'Male R',
                        image: '',
                        expandedImage: '',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/knee-male-right.html',
                        alt: 'The knee, right, male',
                        threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Knee_R.glb'
                    }
                ]
            }, {
                name: 'Large Intestine',
                image: 'assets/images/large_intestine.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/large-intestine-female.html',
                    alt: 'The large intestine, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/SBU_F_Intestine_Large.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/large-intestine-male.html',
                    alt: 'The large intestine, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/SBU_M_Intestine_Large.glb'
                }]
            }, {
                name: 'Liver',
                image: 'assets/images/liver.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/liver-female.html',
                    alt: 'The liver, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Liver.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/liver-male.html',
                    alt: 'The large intestine, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Liver.glb'
                }]
            }, {
                name: 'Lungs',
                image: 'assets/images/lungs.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/lung-female.html',
                    alt: 'The lungs, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Lung.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/lung-male.html',
                    alt: 'The lungs, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Lung.glb'
                }]
            }, {
                name: 'Lymph Node',
                image: 'assets/images/lymph_node.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/lymph-node-female.html',
                    alt: 'The lymph nodes, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/NIH_F_Lymph_Node.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/lymph-node-male.html',
                    alt: 'The lungs, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/NIH_M_Lymph_Node.glb'
                }]
            }, {
                name: 'Ovary',
                image: 'assets/images/ovary.svg',
                tissueData: [{
                    name: 'Female, L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/ovary-female-left.html',
                    alt: 'The ovary, female, left',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Ovary_L.glb'
                }, {
                    name: 'Female, R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/ovary-female-right.html',
                    alt: 'The ovary, female, right',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Ovary_R.glb'
                }]
            }, {
                name: 'Pancreas',
                image: 'assets/images/pancreas.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/pancreas-female.html',
                    alt: 'The pancreas, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Pancreas.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/pancreas-male.html',
                    alt: 'The pancreas, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Pancreas.glb'
                }]
            }, {
                name: 'Prostate',
                image: 'assets/images/prostate.svg',
                tissueData: [{
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/prostate-male.html',
                    alt: 'The prostate, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Prostate.glb'
                }]
            }, {
                name: 'Skin',
                image: 'assets/images/skin.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/skin-female.html',
                    alt: 'The skin, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Skin.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/skin-male.html',
                    alt: 'The skin, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Skin.glb'
                }]
            }, {
                name: 'Small Intestine',
                image: 'assets/images/small_intestine.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/small-intestine-female.html',
                    alt: 'The small intestine, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Small_Intestine.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/small-intestine-male.html',
                    alt: 'The small intestine, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Small_Intestine.glb'
                }]
            }, {
                name: 'Spleen',
                image: 'assets/images/spleen.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/spleen-female.html',
                    alt: 'The spleen, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Spleen.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/spleen-male.html',
                    alt: 'The spleen, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Spleen.glb'
                }]
            }, {
                name: 'Thymus',
                image: 'assets/images/thymus.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/thymus-female.html',
                    alt: 'The thymus, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Thymus.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/thymus-male.html',
                    alt: 'The thymus, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Thymus.glb'
                }]
            }, {
                name: 'Ureter',
                image: 'assets/images/ureter.svg',
                tissueData: [{
                    name: 'Female, L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/ureter-female-left.html',
                    alt: 'The ureter, left, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Ureter_L.glb'
                }, {
                    name: 'Female, R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/ureter-female-right.html',
                    alt: 'The ureter, right, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Ureter_R.glb'
                }, {
                    name: 'Male, L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/ureter-male-left.html',
                    alt: 'The ureter, left, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Ureter_L.glb'
                }, {
                    name: 'Male, R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/ureter-male-right.html',
                    alt: 'The ureter, right, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Ureter_R.glb'
                }]
            }, {
                name: 'Urinary Bladder',
                image: 'assets/images/urinary_bladder.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/urinary-bladder-female.html',
                    alt: 'The urinary bladder, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Urinary_Bladder.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/urinary-bladder-male.html',
                    alt: 'The urinary bladder, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_M_Urinary_Bladder.glb'
                }]
            }, {
                name: 'Uterus',
                image: 'assets/images/uterus.svg',
                tissueData: [{
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.1/docs/ref-organs/uterus-female.html',
                    alt: 'The uterus, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.1/models/VH_F_Uterus.glb'
                }]
            }
        ]
    },
    {
        version: '1.0',
        organData: [
            {
                name: 'Bone Marrow & Blood/Pelvis',
                image: 'assets/images/bone_marrow.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/pelvis-female.html',
                    alt: 'The pelvis, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_F_Pelvis.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/pelvis-male.html',
                    alt: 'The pelvis, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_M_Pelvis.glb'
                }]
            },
            {
                name: 'Allen Brain',
                image: 'assets/images/allen_brain.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/brain-female.html',
                    alt: 'The Allen brain, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/Allen_F_Brain.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/brain-male.html',
                    alt: 'The Allen brain, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/Allen_M_Brain.glb'
                }]
            },
            {
                name: 'Heart',
                image: 'assets/images/heart.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/heart-female.html',
                    alt: 'The heart, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_F_Heart.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/heart-male.html',
                    alt: 'The heart, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_M_Heart.glb'
                }]
            },
            {
                name: 'Large Intestine',
                image: 'assets/images/large_intestine.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/intestine-large-female.html',
                    alt: 'The intestine, large, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/SBU_F_Intestine_Large.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/intestine-large-male.html',
                    alt: 'The intestine, large, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/SBU_Intestine_Large.glb'
                }]
            },
            {
                name: 'Kidney',
                image: 'assets/images/kidney.svg',
                tissueData: [
                    {
                        name: 'Female L',
                        image: '',
                        expandedImage: '',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/kidney-female-left.html',
                        alt: 'The kidney, left, female',
                        threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_F_Kidney_Left.glb'
                    },
                    {
                        name: 'Female R',
                        image: '',
                        expandedImage: '',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/kidney-female-right.html',
                        alt: 'The kidney, right, female',
                        threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_F_Kidney_Right.glb'
                    }, {
                        name: 'Male L',
                        image: '',
                        expandedImage: '',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/kidney-male-left.html',
                        alt: 'The kidney, left, male',
                        threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_M_Kidney_Left.glb'
                    },
                    {
                        name: 'Male R',
                        image: '',
                        expandedImage: '',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/kidney-male-right.html',
                        alt: 'The kidney, right, male',
                        threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_M_Kidney_Right.glb'
                    }
                ]
            },
            {
                name: 'Lungs',
                image: 'assets/images/lungs.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_F_Lung.glb',
                    alt: 'The lungs, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_F_Lung.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/lung-male.html',
                    alt: 'The lungs, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_M_Lung.glb'
                }]
            },
            {
                name: 'Lymph Node',
                image: 'assets/images/lymph_node.svg',
                tissueData: [{
                    name: 'Female L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/lymph-node-female-left.html',
                    alt: 'The lymph nodes, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/NIH_F_Lymph_Node_Left.glb'
                }, {
                    name: 'Female R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/lymph-node-female-right.html',
                    alt: 'The lymph nodes, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/NIH_F_Lymph_Node_Right.glb'
                }, {
                    name: 'Male L',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/lymph-node-male-left.html',
                    alt: 'The lymph nodes, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/NIH_M_Lymph_Node_Left.glb'
                }, {
                    name: 'Male R',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/lymph-node-male-right.html',
                    alt: 'The lymph nodes, male',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/NIH_M_Lymph_Node_Right.glb'
                }]
            },
            {
                name: 'Skin',
                image: 'assets/images/skin.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/skin-female.html',
                    alt: 'The lymph nodes, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_F_Skin.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/skin-male.html',
                    alt: 'The lymph nodes, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_M_Skin.glb'
                }]
            },
            {
                name: 'Spleen',
                image: 'assets/images/spleen.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/spleen-female.html',
                    alt: 'The lymph nodes, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_F_Spleen.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/spleen-male.html',
                    alt: 'The lymph nodes, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_M_Spleen.glb'
                }]
            },
            {
                name: 'Thymus',
                image: 'assets/images/thymus.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/thymus-female.html',
                    alt: 'The lymph nodes, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_F_Thymus.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/thymus-male.html',
                    alt: 'The lymph nodes, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_M_Thymus.glb'
                }]
            },
            {
                name: 'Blood Vasculature',
                image: 'assets/images/blood_vasculature.svg',
                tissueData: [{
                    name: 'Female',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/vasculature-female.html',
                    alt: 'The lymph nodes, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_F_Vasculature.glb'
                }, {
                    name: 'Male',
                    image: '',
                    expandedImage: '',
                    url: 'https://hubmapconsortium.github.io/ccf-releases/v1.0/docs/ref-organs/vasculature-male.html',
                    alt: 'The lymph nodes, female',
                    threeDimImage: 'https://cdn.jsdelivr.net/gh/hubmapconsortium/ccf-releases@main/v1.0/models/VH_M_Vasculature.glb'
                }]
            }
        ]
    },


]