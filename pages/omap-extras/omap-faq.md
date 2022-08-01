# Organ Mapping Antibody Panel (OMAP) Frequently Asked Questions (FAQs)
  
## General OMAP Questions
<details open>
<summary>General OMAP Questions</summary>
  <ul>
    <li><a href="#q1-what-is-an-omap">What is an OMAP?</a></li>
    <li>How are OMAPs different from other validated antibody resources?</li>
    <li>Which multiplexed antibody-based imaging techniques are supported?</li>
    <li>Are OMAPs just for healthy human tissues?</li>
    <li>How many antibodies are included in an OMAP?</li>
    <li>How do I cite an existing OMAP?</li>
    <li>How do I cite OMAPs overall?</li>
  </ul>
</details>

## Authoring OMAPs
<details open>
<summary>Authoring OMAPs</summary>
<ul><li>How do I author an OMAP?<br>
<li>Must I be a member of the Human Biomolecular Atlas Program (HuBMAP) to author an OMAP?<br>
<li>How do I report imaging methods that employ oligo-conjugated antibodies and fluorescent reporters for marker detection?<br>
<li>Should I include antigen retrieval conditions for OMAPs designed for Formalin Fixed Paraffin Embedded (FFPE) specimens?<br>
<li>How do I report the use of unconjugated primaries detected with secondary antibodies?<br>
<li>How do I report antibodies used for non-cyclic, non-fluorescent based methods such as imaging mass cytometry?<br>
<li>How do I report the use of custom reagents conjugated in house or purchased from a vendor?<br>
<li>Should I include an OMAP in my manuscript that uses multiplexed antibody-based imaging?<br>
<li>As an OMAP author who has published my OMAP with a peer reviewed journal, why should I also publish my OMAP on the HuBMAP CCF Portal?<br>
<li>Do OMAPs need to accompany published work featuring multiplexed antibody-based imaging?<br>
<li>Can I make changes to an existing OMAP?<br>
<li>Can I expand upon an existing OMAP?<br><ul>
</details>

#### Q1: What is an OMAP?<br>
A1: OMAPs are combinations of antibodies that define cell populations and anatomical structures reproducibly in diverse human tissues using  multiplexed antibody-based  imaging. . They are tailored to the tissue/organ of interest, multiplexed imaging method, and sample type (fixed frozen, FFPE). These initiatives emerged from the Human BioMolecular Atlas Program (HuBMAP) Consortium and parallel efforts in the field of cytometry to construct peer reviewed Optimized Multicolor Immunofluorescence Panels (OMIPs). See Information on OMIPs link for more information.
#### Q2: How are OMAPs different from other validated antibody resources?
A2: OMAPs provide experimental details relevant for their successful application, e.g., tissue preservation method, imaging method, antigen retrieval conditions, and antibody cycling order. The end result is an assembly of expertly curated antibodies that work together in a single tissue section. By analogy, OMAPs are recipes and validated antibody lists such as the HuBMAP Antibody Validation Report (https://avr.hubmapconsortium.org ) and Human Protein Atlas (The human proteome - The Human Protein Atlas) https://www.proteinatlas.org/humanproteome/tissue are ingredient lists.
#### Q3: Which multiplexed antibody-based imaging techniques are supported?
A3: We will consider OMAPs from 2D and 3D tissue imaging techniques that employ antibodies for protein detection.
#### Q4: Are OMAPs just for healthy human tissues?
A4: HuBMAP is focused on collecting OMAPs for healthy human tissues in support of a Human Reference Atlas (HRA). However, we will support OMAPs designed for diseased human tissues. Please inquire by emailing infoccf@indiana.edu about OMAPs designed for use in experimental animal model systems or organoids.
#### Q5: How many antibodies are included in an OMAP?
A5: An ideal panel will be as comprehensive as possible (40-60+ markers). However, we welcome OMAPs that capture most anatomical structures and cell types present in a tissue and, at minimum, allow for the characterization of 10 biomarkers in a single tissue section. In July 2022, we published OMAPs ranging from 12-51 markers. 
#### Q6: How do I cite an existing OMAP?
A6: Each OMAP has a digital object identifier (DOI) which can be used to cite it. Please cite OMAPs that you used and/or built upon. Thank you!
#### Q7: How do I cite OMAPs overall?
A7: Please cite: Hickey, John W., Elizabeth K. Neumann, Andrea J. Radtke, Jeannie M. Camarillo, Rebecca T. Beuschel, Alexandre Albanese, Elizabeth McDonough, et al. “Spatial Mapping of Protein Composition and Tissue Organization: A Primer for Multiplexed Antibody-Based Imaging.” Nature Methods, November 22, 2021. https://doi.org/10.1038/s41592-021-01316-y.
and Nature Methods Correspondence (Add link to Correspondence when available).

#### Q8: How do I author an OMAP?
A8: Please follow the instructions in the “SOP: Construction of Organ Mapping Antibody Panels for Multiplexed Antibody-Based Imaging of Human Tissues” https://doi.org/10.5281/zenodo.5749882. 
OMAP template updated for harmonization with Antibody Validation Reports:

OMAP_Antibody_Table_Template_6-1-2022 OMAP Antibody Table Template
Example OMAP Form OMAP Description Document

#### Q9: Must I be a member of the Human Biomolecular Atlas Program (HuBMAP) to author an OMAP?
A9: No, OMAP authors do not need to be affiliated with HuBMAP.  Our initial set of OMAPs featured in this Nature Methods Correspondence were authored by members of several consortia,e.g. HuBMAP, the Human Protein Atlas (HPA), Human Cell Atlas (HCA), LungMap, and the Senescence Network (SenNet). We additionally welcome contributions from industry leaders and technology developers in the spatial biology field.

#### Q10: How do I report imaging methods that employ oligo-conjugated antibodies and fluorescent reporters for marker detection?
A10: Please list oligonucleotide as conjugate, detail cycle number, and specify fluorophore, e.g., Cy3, Cy5, etc in Fluorescent Reporter field. See CODEX OMAPs for the human intestines, pancreas, and kidney using this link:
https://hubmapconsortium.github.io/ccf/pages/omap.html.

#### Q11: Should I include antigen retrieval conditions for OMAPs designed for Formalin Fixed Paraffin Embedded (FFPE) specimens?
A11: Yes. Please include the method (buffer, temperature, device used for antigen retrieval) in the OMAP Description Document. Please include links to relevant protocols in the OMAP Description Document and OMAP Antibody Table. See Lung Cell Dive OMAP: 
https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/omap/omap-lung-celldive.html

#### Q12: How do I report the use of unconjugated primaries detected with secondary antibodies?
A12: For unconjugated primary antibodies, include “secondary detection” and specify which fluorophore in the “Conjugate” field, e.g., Cy3 secondary detection. For secondary antibodies leave the following fields blank in the OMAP Antibody Table: uniprot_accession_number, HGNC_ID, and target_name. In the “Rationale” field, please state “Use for detection of (insert unconjugated primary antibody here). Please see Skin Cell Dive OMAP, specifically UCH-L1 primary antibody and Cy3 secondary antibody: 
https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/omap/omap-skin-celldive.html 

#### Q13: How do I report antibodies used for non-cyclic, non-fluorescent based methods such as imaging mass cytometry?
Q13: Please list the metal conjugates used and list “1” for cycle number. Please see Liver SIMS OMAP for details on how to report non-cyclic imaging methods employing metal-labeled antibodies: 
https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/omap/omap-liver-sim.html

#### Q14: How do I report the use of custom reagents conjugated in house or purchased from a vendor?
A14: Please include the catalog number for the unconjugated antibody and specify (unconjugated). Under “Conjugate” field, list the fluorophore, specify custom, and add conjugation kit catalog number. Please see Lymph Node IBEX OMAP for several examples: 
https://hubmapconsortium.github.io/ccf-releases/v1.2/docs/omap/omap-lymph-node-ibex.html
Please create a Research Resource Identifiers (RRIDs) for all custom reagents at https://scicrunch.org/resources.

#### Q15: Should I include an OMAP in my manuscript that uses multiplexed antibody-based imaging?
A15: We strongly recommend that you format your antibody panel using the OMAP Antibody Table provided here OMAP_Antibody_Table_Template_6-1-2022. The metadata captured by our OMAP template conform to journal reporting standards and are recommended for reproducible multiplexed tissue imaging (Schapiro et al. 2022; Hickey et al. 2021) . This can be included as a supplementary table and/or dataset (CSV) file.

#### Q16: As an OMAP author who has published my OMAP with a peer reviewed journal, why should I also publish my OMAP on the HuBMAP CCF Portal?
A16: By publishing OMAPs on the HuBMAP CCF portal, we aim to highlight useful resources that may be missed in the methods and supplementary tables of most manuscripts. We appreciate the time and dedication it takes to construct an OMAP de novo and hope that the HuBMAP CCF Portal will provide greater visibility for your work while helping others with their multiplexed imaging studies.

#### Q17: Do OMAPs need to accompany published work featuring multiplexed antibody-based imaging?
A17: No, we will accept OMAPs created for ongoing work that also contain links to publicly available protocols and datasets, e.g., protocols.io and Zenodo. We additionally welcome unpublished OMAPs authored by industry leaders as long as relevant protocols and representative datasets are provided. 

#### Q18: Can I make changes to an existing OMAP?
A18: No, OMAPs are validated and reviewed by subject matter experts.

#### Q19: Can I expand upon an existing OMAP?
A19: Yes, please first cite the original OMAP as a foundation and detail changes in the your OMAP Description Document, e.g., additional antibodies included, alternative clones used, changes to the order in which antibodies are applied (if applicable) or conjugation kits used.




