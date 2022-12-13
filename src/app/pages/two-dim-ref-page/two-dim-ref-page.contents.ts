import { ChooseVersion } from "src/app/components/choose-version/choose-version";
import { PageDataItems } from "src/app/components/page-data/page-data";
import { PageHeaderItems } from "src/app/components/page-header/page-header-items";
import { SopLinks } from "src/app/components/sop-links/sop-links";
import { VersionOrgans } from "src/app/components/two-dim-image/two-dim-image";

export const twoDimHeaderCardDetails: PageHeaderItems[] = [
    {
        image: 'assets/images/two_dim_header.svg',
        title: 'CCF 2D Functional Tissue Unit (FTU) Illustrations',
        subtitle: 'Open source 2D reference illustrations of Functional Tissue Units (FTUs) mapped to ASCT+B tables used for single cell data exploration'
    }
]

export const overviewData: PageDataItems[] = [
    {
        heading: 'Overview',
        descriptions: `The 2D Functional Tissue Unit Library provides anatomically correct illustrations of functional tissue units (FTUs). The illustrations are developed by a specialist in 2D medical illustration and approved by organ experts.
    <br><br>Illustrations are created using terms from the Anatomical Structures, Cell Types, and Biomarker (ASCT+B) table for each organ. Subject matter experts collaborate on a list of anatomical structures and/or cell types to be included in each FTU. Histology atlases and data sets are consulted for visual reference, and research is undertaken to determine if cell sizes and their relative number and distribution is known for a given FTU. Reasonable estimates are made when placing cells in the illustration and relating them to a scale bar.
    <br><br>A crosswalk table is then created for each FTU illustration, linking the terms in the ASCT+B table to the individual cells in the illustration. This provides an opportunity to add interactive functionality and extends the potential uses for each FTU.
    <br><br>On June, 2022, a total of 8 2D FTUs became available in SVG format. Each illustration can be downloaded and edited using Adobe Illustrator. We encourage users to create additional FTU illustrations using these templates, or to use and share them as desired.`
    }
]

export const sopData: SopLinks[] = [
    {
        urls: ' Style Guide: HuBMAP 2D Functional Tissue Unit (FTU) Illustrations',
        href: "https://zenodo.org/record/6703108/files/SOP_%20Creating%202D%20Illustrations%20for%20Functional%20Tissue%20Units.pdf"
    }
]

export const versionData: ChooseVersion[] = [
    { release: '4th HRA Release (v1.3), December 2022', version: '1.3' },
    { release: '3rd HRA Release (v1.2), June 2022', version: '1.2' }
]

export const termsOfUseData: PageDataItems[] = [
    {
        heading: 'Terms of Use',
        descriptions: `HuBMAP data are supplied with no warranties, expressed or implied, including without limitation, any warranty of merchantability or fitness for a particular purpose or non-infringement. No warranty with respect to the HuBMAP infrastructure is provided, including without limitation, any uptime warranty.
        The Parties make no representations that the use of the data will not infringe any patent or proprietary rights of third parties.`
    },
    {
        heading: 'License',
        descriptions: 'All CCF 2D functional tissue units files are released under <a href="https://creativecommons.org/licenses/by/4.0/" target=_blank> Attribution 4.0 International (CC BY 4.0)</a>.'
    },
    {
        heading: 'Citation',
        descriptions: `If you use the 2D data files in v1.2 release, please cite this effort as follows:
        <br><br> Bajema, R., Bidanta, S., Quardokus, E., Herr II, B. W., Börner, K. 2022.
        <a href="https://hubmapconsortium.github.io/ccf/pages/ccf-2d-reference-library.html/" target="_blank">HuBMAP CCF 2D Reference Object Library</a>. Accessed on May 6, 2022.`
    },
    {
        heading: 'Acknowledgments',
        descriptions: 'The 2D Functional Tissue Unit Library files were created by Rachel Bajema on the MC-IU team. This research has been funded in part by the NIH Common Fund through the Office of Strategic Coordination/Office of the NIH Director under award OT2OD026671 and the NIDDK Kidney Precision Medicine Project grant U2CDK114886.'
    }
]

export const license: PageDataItems[] = [
    {
        heading: 'License',
        descriptions: 'All CCF 2D functional tissue units files are released under <a href="https://creativecommons.org/licenses/by/4.0/" target=_blank> Attribution 4.0 International (CC BY 4.0)</a>.'
    }
]

export const organInfo: VersionOrgans[] = [
    {
        //please update new doi links, pngs when available
        version: '1.3',
        organData: [
            {
                name: 'Kidney',
                image: 'assets/images/kidney.svg',
                tissueData: [
                    {
                        name: 'Ascending thin loop of henle',
                        image: 'assets/images/ascending-thin-loop-of-henle.svg',
                        expandedImage: 'assets/images/ascending-thin-loop-of-henle.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-kidney-ascending-thin-loop-of-henle.html',
                        svg: 'assets/images/ascending-thin-loop-of-henle.svg',
                        ai: 'assets/images/ascending-thin-loop-of-henle.ai'
                    },
                    {
                        name: 'Cortical Collecting Duct',
                        image: 'assets/images/cortical-collecting-duct.svg',
                        expandedImage: 'assets/images/cortical-collecting-duct.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-kidney-cortical-collecting-duct.html',
                        svg: 'assets/images/cortical-collecting-duct.svg',
                        ai: 'assets/images/cortical-collecting-duct.ai'
                    },
                    {
                        name: 'Descending thin loop of henle',
                        image: 'assets/images/descending-thin-loop-of-henle.svg',
                        expandedImage: 'assets/images/descending-thin-loop-of-henle.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-kidney-descending-thin-loop-of-henle.html',
                        svg: 'assets/images/descending-thin-loop-of-henle.svg',
                        ai: 'assets/images/descending-thin-loop-of-henle.ai'
                    },
                    {
                        name: 'Inner Medullary collecting duct',
                        image: 'assets/images/inner-medullary-collecting-duct.svg',
                        expandedImage: 'assets/images/inner-medullary-collecting-duct.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-kidney-inner-medullary-collecting-duct.html',
                        svg: 'assets/images/inner-medullary-collecting-duct.svg',
                        ai: 'assets/images/inner-medullary-collecting-duct.ai'
                    },
                    {
                        name: 'Nephron',
                        image: 'assets/images/nephron_1.3.svg',
                        expandedImage: 'assets/images/nephron_1.3.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-kidney-nephron.html',
                        svg: 'assets/images/nephron_1.3.svg',
                        ai: 'assets/images/nephron.ai'
                    },
                    {
                        name: 'Outer Medullary Collecting Duct',
                        image: 'assets/images/outer-medullary-collecting-duct.svg',
                        expandedImage: 'assets/images/outer-medullary-collecting-duct.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-kidney-outer-medullary-collecting-duct.html',
                        svg: 'assets/images/nephron_1.3.svg',
                        ai: 'assets/images/outer-medullary-collecting-duct.ai'
                    },
                    {
                        name: 'Renal Corpuscle',
                        image: 'assets/images/renal-corpuscle.svg',
                        expandedImage: 'assets/images/renal-corpuscle.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-kidney-renal-corpuscle.html',
                        svg: 'assets/images/renal-corpuscle.svg',
                        ai: 'assets/images/renal-corpuscle.ai'
                    },
                    {
                        name: 'Thick Ascending Loop Of Henle',
                        image: 'assets/images/thick-ascending-loop-of-henle.svg',
                        expandedImage: 'assets/images/thick-ascending-loop-of-henle.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-kidney-thick-ascending-loop-of-henle.html',
                        svg: 'assets/images/thick-ascending-loop-of-henle.svg',
                        ai: 'assets/images/thick-ascending-loop-of-henle.ai'
                    }
                ]
            },
            {
                name: 'Large Intestine',
                image: 'assets/images/large_intestine.svg',
                tissueData: [
                    {
                        name: 'Crypt Lieberkuhn',
                        image: 'assets/images/crypt-lieberkuhn.svg',
                        expandedImage: 'assets/images/crypt-lieberkuhn.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-large-intestine-crypt-lieberkuhn.html',
                        svg: 'assets/images/crypt-lieberkuhn.svg',
                        ai: 'assets/images/crypt-lieberkuhn.ai'
                    }
                ]
            },
            {
                name: 'Liver',
                image: 'assets/images/liver.svg',
                tissueData: [
                    {
                        name: 'Liver Lobule',
                        image: 'assets/images/liver_lobule_1.3.svg',
                        expandedImage: 'assets/images/liver_lobule_1.3.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-liver-liver-lobule.html',
                        svg: 'assets/images/liver_lobule_1.3.svg',
                        ai: 'assets/images/liver_lobule.ai'
                    }
                ]
            },
            {
                name: 'Lung',
                image: 'assets/images/lungs.svg',
                tissueData: [
                    {
                        name: 'Bronchial Submucosal Gland',
                        image: 'assets/images/bronchial-submucosal-gland.svg',
                        expandedImage: 'assets/images/bronchial-submucosal-gland.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-lung-bronchial-submucosal-gland.html',
                        svg: 'assets/images/bronchial-submucosal-gland.svg',
                        ai: 'assets/images/bronchial-submucosal-gland.ai'
                    },
                    {
                        name: 'Pulmonary Alveolus',
                        image: 'assets/images/pulmonary_alveolus_1.3.svg',
                        expandedImage: 'assets/images/pulmonary_alveolus_1.3.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-lung-pulmonary-alveolus.html',
                        svg: 'assets/images/pulmonary_alveolus_1.3.svg',
                        ai: 'assets/images/pulmonary_alveolus_1.3.ai'
                    }
                ]
            },
            {
                name: "Pancreas",
                image: 'assets/images/pancreas.svg',
                tissueData: [
                    {
                        name: 'Intercalated Duct',
                        image: 'assets/images/2d-ftu-pancreas-intercalated-duct.svg',
                        expandedImage: 'assets/images/2d-ftu-pancreas-intercalated-duct.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-pancreas-intercalated-duct.html',
                        svg: 'assets/images/2d-ftu-pancreas-intercalated-duct.svg',
                        ai: 'assets/images/2d-ftu-pancreas-intercalated-duct.ai'
                    },
                    {
                        name: 'Pancreatic Acinus',
                        image: 'assets/images/2d-ftu-pancreas-pancreatic-acinus.svg',
                        expandedImage: 'assets/images/2d-ftu-pancreas-pancreatic-acinus.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-pancreas-pancreatic-acinus.html',
                        svg: 'assets/images/2d-ftu-pancreas-pancreatic-acinus.svg',
                        ai: 'assets/images/2d-ftu-pancreas-pancreatic-acinus.ai'
                    },
                    {
                        name: 'Islets Of Langerhans Pancreas',
                        image: 'assets/images/islets_of_langerhans_pancreas.svg',
                        expandedImage: 'assets/images/islets_of_langerhans_pancreas.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-pancreas-islets-langerhans.html',
                        svg: 'assets/images/islets_of_langerhans_pancreas.svg',
                        ai: 'assets/images/islets_of_langerhans_pancreas.ai'
                    }
                ]
            },
            {
                name: "Prostate",
                image: 'assets/images/prostate.svg',
                tissueData: [
                    {
                        name: 'Prostate Glandular Acinus',
                        image: 'assets/images/2d-ftu-prostate-prostate-glandular-acinus.svg',
                        expandedImage: 'assets/images/2d-ftu-prostate-prostate-glandular-acinus.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-prostate-prostate-glandular-acinus.html',
                        svg: 'assets/images/2d-ftu-prostate-prostate-glandular-acinus.svg',
                        ai: 'assets/images/2d-ftu-prostate-prostate-glandular-acinus.ai'
                    }
                ]
            },
            {
                name: "Skin",
                image: 'assets/images/skin.svg',
                tissueData: [
                    {
                        name: 'Dermal Papilla',
                        image: 'assets/images/2d-ftu-skin-dermal-papilla.svg',
                        expandedImage: 'assets/images/2d-ftu-skin-dermal-papilla.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-skin-dermal-papilla.html',
                        svg: 'assets/images/2d-ftu-skin-dermal-papilla.svg',
                        ai: 'assets/images/2d-ftu-skin-dermal-papilla.ai'
                    },
                    {
                        name: 'Epidermal Ridge',
                        image: 'assets/images/2d-ftu-skin-epidermal-ridge.svg',
                        expandedImage: 'assets/images/2d-ftu-skin-epidermal-ridge.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-skin-epidermal-ridge.html',
                        svg: 'assets/images/2d-ftu-skin-epidermal-ridge.svg',
                        ai: 'assets/images/2d-ftu-skin-epidermal-ridge.ai'
                    }
                ]
            },
            {
                name: "Thymus",
                image: 'assets/images/thymus.svg',
                tissueData: [
                    {
                        name: '2d-ftu-thymus-thymus-lobule',
                        image: 'assets/images/2d-ftu-thymus-thymus-lobule.svg',
                        expandedImage: 'assets/images/2d-ftu-thymus-thymus-lobule.svg',
                        url: 'https://hubmapconsortium.github.io/ccf-releases/v1.3/docs/2d-ftu/2d-ftu-thymus-thymus-lobule.html',
                        svg: 'assets/images/2d-ftu-thymus-thymus-lobule.svg',
                        ai: 'assets/images/2d-ftu-thymus-thymus-lobule.ai'
                    }
                ]
            }
        ]
    },
    {
        version: '1.2',
        organData: [
            {
                name: 'Kidney',
                image: 'assets/images/kidney.svg',
                tissueData: [
                    {
                        name: 'Nephron',
                        image: 'assets/images/nephron.png',
                        expandedImage: 'assets/images/nephron.svg',
                        url: 'https://doi.org/10.48539/HBM489.SGQZ.655',
                        svg: 'assets/images/nephron.svg'
                    },
                    {
                        name: 'Renal Corpuscle',
                        image: 'assets/images/renal_corpuscle.png',
                        expandedImage: 'assets/images/renal_corpuscle.svg',
                        url: 'https://doi.org/10.48539/HBM395.LVFN.656',
                        svg: 'assets/images/renal_corpuscle.svg'
                    }
                ]
            },
            {
                name: 'Large Intestine',
                image: 'assets/images/large_intestine.svg',
                tissueData: [{
                    name: 'Crypt of Lieberkuhn',
                    image: 'assets/images/crypt_lieberkuhn_large_intestine.png',
                    expandedImage: 'assets/images/crypt_lieberkuhn_large_intestine.svg',
                    url: 'https://doi.org/10.48539/HBM373.JRGS.542',
                    svg: 'assets/images/crypt_lieberkuhn_large_intestine.svg'
                }]
            },
            {
                name: 'Liver',
                image: 'assets/images/liver.svg',
                tissueData: [{
                    name: 'Liver Lobule',
                    image: 'assets/images/liver_lobule.png',
                    expandedImage: 'assets/images/liver_lobule.svg',
                    url: 'https://doi.org/10.48539/HBM692.KXMT.939',
                    svg: 'assets/images/liver_lobule.svg',
                }]
            },
            {
                name: 'Lungs',
                image: 'assets/images/lungs.svg',
                tissueData: [{
                    name: 'Pulmonary Alveolus',
                    image: 'assets/images/pulmonary_alveolus_lung.png',
                    expandedImage: 'assets/images/pulmonary_alveolus_lung.svg',
                    url: 'https://doi.org/10.48539/HBM626.KZVN.453',
                    svg: 'assets/images/pulmonary_alveolus_lung.svg',
                }]
            },
            {
                name: 'Pancreas',
                image: 'assets/images/pancreas.svg',
                tissueData: [{
                    name: 'Islets of Langerhans',
                    image: 'assets/images/islets_langerhans_pancreas.png',
                    expandedImage: 'assets/images/islets_langerhans_pancreas.svg',
                    url: 'https://doi.org/10.48539/HBM344.CNNH.639',
                    svg: 'assets/images/islets_langerhans_pancreas.svg',
                }]
            },
            {
                name: 'Prostate',
                image: 'assets/images/prostate.svg',
                tissueData: [{
                    name: 'Prostate Glandular Acinus',
                    image: 'assets/images/prostate_glandular_acinus_prostate.png',
                    expandedImage: 'assets/images/prostate_glandular_acinus_prostate.svg',
                    url: 'https://doi.org/10.48539/HBM523.TDCH.662',
                    svg: 'assets/images/prostate_glandular_acinus_prostate.svg',
                }]
            },
            {
                name: 'Thymus',
                image: 'assets/images/thymus.svg',
                tissueData: [{
                    name: 'Thymus Lobule',
                    image: 'assets/images/thymus_lobule_thymus.png',
                    expandedImage: 'assets/images/thymus_lobule_thymus.svg',
                    url: 'https://doi.org/10.48539/HBM794.PKVD.274',
                    svg: 'assets/images/thymus_lobule_thymus.svg',
                }]
            }
        ]
    }
]
