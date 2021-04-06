# **SOP: Using the Registration User Interface**

*How to register tissue blocks to reference organs*

**Authors**: Andreas Bueckle and Katy Börner, Bruce W. Herr II

**Approved by**: Katy Börner (3/19/21), Bruce W. Herr II (3/19/21)

**PI**: Katy Börner

**NIH Award No**: 1OT2OD026671
HIVE MC-IU Team, Indiana University

Updated: March 19, 2021

## Introduction

This document contains instructions on how to register human tissue 3D spatially to a reference organ using the Registration User Interface (RUI), and complements release demos prepared by the software development team. This SOP is written for HuBMAP members that would like to upload tissue data via the [HuBMAP ingest portal](https://ingest.hubmapconsortium.org/) and for users who would like to register data not affiliated with HuBMAP using the [public RUI](https://hubmapconsortium.github.io/ccf-ui/rui/)).

The latest video demo (03/10/2021) can be found [here](https://www.youtube.com/watch?v=142hGer4xvU).

## Versions of the Registration User Interface

Two versions of the RUI exist, and which one you access depends on whether you are registering tissue blocks from the HuBMAP ingest portal or not.

1. If the tissue block you are registering is affiliated with the HuBMAP project, go to the [HuBMAP ingest portal](https://ingest.hubmapconsortium.org/) and follow the instructions [below](##accessing-the-rui-from-within-the-hubmap-ingest-portal). Metadata such as author name, date, etc. is captured as part of the tissue ingest process and RUI data is automatically associated with the tissue on Globus.
2. If the tissue block you are registering is not affiliated with HuBMAP, go to the [public CCF Registration User Interface](https://hubmapconsortium.github.io/ccf-ui/rui/.). You will need to enter your first and last name (top left in Figure 1). You will download the RUI data in JSON format and share it with the MC-IU team. The RUI data will then be placed [into this folder](https://drive.google.com/drive/folders/1iKi1EUGKArerirtY8jc7xHSJo_K8JrEI) and be made available via the [Exploration User Interface](https://portal.hubmapconsortium.org/ccf-eui).
3. The difference between the public version and the HuBMAP version is that the HuBMAP version facilitates submission of the registration data directly to the HuBMAP ingest portal. Additionally, when opening the RUI from within the ingest portal, it appears embedded in the sample registration page.

## Registration Procedures

The registration process is as follows:

1. Gather any materials needed to document where the tissue block was extracted from.
2. Open the relevant version of the RUI (see [above](##Versions-of-the-Registration-User-Interface)).
3. When the RUI first loads, the screen is mostly blank. A video demo with a play button is embedded in the center of the screen. Click the play button to start the demo if desired.
4. Name
  1. In the public version, in the top-left corner, enter your first and last name.
  2. In the ingest portal version, your name is already entered based on data from your user profile.
5. Organ selection:
  1. In the public version, select an organ from the organ carousel at the top center of the screen. Make sure to select the right or left version as appropriate. The organ might take a few seconds to load.
  2. In the ingest portal version, the organ is pre-selected.

## Tissue Placement

1. For a step-by-step demonstration, please watch [this video demo](https://youtu.be/142hGer4xvU?t=325).
2. Resize the tissue block using the Tissue Block Dimensions text input fields in the top right corner. The default is a 10x10x10 mm block.
3. Move the tissue block into position by clicking and holding the left mouse button over the tissue block . Note that in order for the tissue block to be movable, the radio buttons in the top left corner of the 3D window have to be set to either &quot;Left&quot;, &quot;Right&quot;, &quot;Anterior&quot;, or &quot;Posterior&quot;. When set to &quot;3D&#39;, the tissue block cannot be moved.
4. The tissue block can only be moved in two dimensions at a time.
  1. To make &quot;looking inside&quot; the reference organ easier, all anatomical structures of the organ are set to only 20% opacity by default. You can further adjust the opacity using the Anatomical Structures accordion menu in the metadata pane (see [below](##Description-of-the-user-interface-(UI))).
  2. To inspect tissue blocks you placed before (for reference), click the &quot;Previously Registered Blocks&quot; toggle button in the metadata pane. Note that clicking this toggle button will show all previously registered tissue blocks.
  3. To change the perspective, use the radio buttons in the 3D pane (see [below](##Description-of-the-user-interface-(UI))).
  4. To verify the placement, switch to 3D Preview mode using the corresponding toggle switch at the top of the 3D pane (see [below](##Description-of-the-user-interface-(UI))).
5. Adjust the rotation of the tissue block by using the rotation sliders in the manipulation pane.

## To finalize the registration

1. If you are using the ingest portal version of the RUI, click the &quot;Register Location&quot; button. The RUI window will then close automatically.
2. If you are using the public version of the RUI: In order to review the data and download it as a JSON file, click the &quot;Review and Download&quot; button in the bottom right corner of the screen. A &quot;Registration Review&quot; window pops up, where you can check the validity of the data you generated. You can then download the JSON file to a space on your hard drive.

## Accessing the RUI from within the HuBMAP Ingest Portal

**DISCLAIMER** : The steps outlined here can change depending on updates to the Ingest Portal. Screenshots may not always reflect what you see on your machine.

**IMPORTANT:** In order to be able to use the RUI, the organ you are registering your sample for must be supported by the RUI. You can check this by opening the standalone version of the RUI and checking the organ carousel at the top of the page:

[https://hubmapconsortium.github.io/ccf-ui/rui/](https://hubmapconsortium.github.io/ccf-ui/rui/)

![Overview of the RUI with highlight on organ carousel](/sop_images/01_rui_organs.jpg)

There are three cases where you would access the RUI from within the HuBMAP Ingest Portal:

1. You would like to register a new sample and then register its location via the RUI.
2. You would like to register the RUI location for an existing sample.
3. You would like to edit an existing RUI registration.

## Case 1: Register a new sample and then register its location

1. Visit [https://ingest.hubmapconsortium.org](https://ingest.hubmapconsortium.org/)
2. If needed, log in using your institutional credentials.

![](RackMultipart20210405-4-u81qdm_html_c1f43d87028c2a26.png)

1. Click &quot;Go&quot; to register a new sample.

![](RackMultipart20210405-4-u81qdm_html_21324e6bd8ba6cf9.png)

1. Click the &quot;New Registration&quot; button and choose &quot;Sample&quot;:

![](RackMultipart20210405-4-u81qdm_html_ab5201949e3437f5.png)

1. Click into the HuBMAP ID field, which prompts an overlay with a search interface.

![](RackMultipart20210405-4-u81qdm_html_8a2c856ddae44934.png)

![](RackMultipart20210405-4-u81qdm_html_5df06983353eb4ca.png)

1. Choose your organization from the drop-down menu.

![](RackMultipart20210405-4-u81qdm_html_b01aae00f2105a2.png)

1. For Type, choose Organ:

![](RackMultipart20210405-4-u81qdm_html_a3c52ecf78b6e8d0.png)

1. Click Search.
2. A list of organs ingested via your organization shows up. Pick one by clicking its row.
3. This opens a screen prepopulated with relevant information about the organ. Additionally, a blue button shows up, labeled &quot;Register Location&quot;.

![](RackMultipart20210405-4-u81qdm_html_a9a6df1cd1ed803.png)

1. Click the button
2. The RUI is displayed, embedded into the page.
3. Follow the steps outlined [above](#_ezmdrr41kbmq) for placing tissue.

## Case 2: Register the location for an existing sample.

1. Follow steps 1-3 of the [Case 1 instructions](#_f4oho2w4s9d).
2. Choose the Organization and Type of sample you would like to add a registration for, e.g., FFPE.

![](RackMultipart20210405-4-u81qdm_html_fbe2f0a2bb553b0b.png)

1. Click the Filter button.

![](RackMultipart20210405-4-u81qdm_html_572dcd41c86e0b4c.png)

1. When the search is done, click on the HuBMAP ID of the desired sample.

![](RackMultipart20210405-4-u81qdm_html_b0b2c78199bd0aed.png)

1. Perform steps 10-13 of the Case 1 instructions above.

## Case 3: Edit an existing registration

1. Perform steps 1-4 of the [Case 2 instructions](#_m9ym86xtrr4i).

![](RackMultipart20210405-4-u81qdm_html_d4d9f541a6265b64.png)

1. You can then access the RUI location via the View Location button.
2. Follow the steps outlined [above](#_ezmdrr41kbmq).

## Description of the user interface (UI)

![](RackMultipart20210405-4-u81qdm_html_7d81a71de9a9ea0d.png)

**Figure 1:** The stand-alone CCF Registration User Interface (RUI) currently accepts tissue registration for four organs (large intestine, heart, kidney, and spleen). The yellow cuboid denotes the tissue block, the green slide indicates the CC1 extraction site inside the spleen. Tissue block size and rotation can be adjusted in the top right. Anatomical structure tags are automatically assigned based on 3D collision with semantically annotated 3D reference objects. Users can automatically add additional tags.

![](RackMultipart20210405-4-u81qdm_html_f0c01a052eea597d.jpg)

Fig. 2. RUI with three panes: metadata (pink), 3D (yellow), manipulation (blue)

The RUI consists of three panes: the metadata pane on the left, the 3D pane in the middle, and the tissue block manipulation pane on the right, see Fig. 2. Here are brief explanations of what can be accomplished in each pane:

  1. The metadata pane contains the following elements:
    1. First Name, Last Name: If you are using the public version of the RUI, you will be able to enter your first and last names.
    2. Donor Sex: enter the sex of the tissue donor.
    3. Anatomical structures accordion menu: The anatomical structures listed here correspond to 3D structures inside the reference organ. Clicking the blue eye icon next to each structure name will turn the structure off. It can be turned on by clicking the icon again. Similarly, a slider appears when the user hovers over the drop icon to the left of the anatomical structure text entry, allowing them to adjust the opacity of the structure. This allows the user to make parts of the organ more transparent than others, allowing them to retain certain structures as landmarks while placing the tissue block.
    4. Common Extraction Sites accordion menu: The common extraction sites menu, when clicked, reveals locations frequently used as extraction locations by particular user groups, such as the apex for the heart. Extraction sites can also serve as important landmarks (such as the bisection line for the kidney). Each extraction site has an eye icon next to it, which can be used to make the extraction site visible or hidden. All extraction sites are hidden by default. Extraction sites are green.
    5. Previously Registered Blocks: This toggle button allows you to view tissue blocks you have registered before, which show as blue in the 3D pane. This information is taken from the local storage of your browser. When previously registered blocks are showing, the opacity of all anatomical structures is reduced to 20%.
  2. The 3D pane contains the reference organ and the tissue block. It is a 3D window, similar to what one would find in 3D modeling software or a video game. In the top-right corner, a set of **radio buttons** allow the user to control the 3D camera of the scene.
    1. Via the radio buttons labeled &quot;Left,&quot; &quot;Right,&quot; &quot;Anterior,&quot; and &quot;Posterior,&quot; the user can rotate the camera around the reference organ in increments of 90 degrees. The current camera view is visually indicated by the icon of a person on the right side of the 3D pane.
    2. When &quot;Left,&quot; &quot;Right,&quot; &quot;Anterior,&quot; or &quot;Posterior&quot; are clicked, the camera movement is restricted to 90 degree increments via the radio buttons mentioned above, and the mouse is used to move the tissue block, see below. When the &quot;3D&quot; button is chosen, the user can verify their tissue placement. When in &quot;3D&quot; mode, the user can rotate the camera at two degrees-of-freedom while clicking and dragging the left mouse button. The user can also zoom in by using the mouse scroll wheel (or a similar input method normally for scrolling), and they can pan the camera, i.e., move it laterally, by clicking and dragging the right mouse button.
    3. On the right side, the current x, y, z-coordinates of the tissue block are indicated (where the origin is in the bottom-left corner of the reference organ).
    4. Also, the circular arrow in the top-right corner of the 3D pane can be used to reset the position of the tissue block.
  3. Finally, the manipulation pane on the right allows the user to resize and rotate the tissue block, indicate slice thickness and number, and review anatomical structure tags generated via collision detection between the tissue block and the anatomical structures in the reference organ.
    1. On the top of the manipulation pane, Tissue Block Dimensions text input fields allow the user to define the size of the tissue block in millimeters (mm). These fields can be reset by clicking the small circular arrow button in the top-right.
    2. Below that, the Tissue Slices text input fields let the user indicate the thickness and amount of slices for the tissue block. Note that the thickness is indicated in micrometers (**μm)**. These fields can be reset by clicking the small circular arrow button in the top-right.
    3. The Tissue Block Rotation sliders allow the user to add rotation to each axis of the tissue block individually. The sliders are color-coded for (red: x, green: y, blue: z). All slider values can be reset by clicking the small circular arrow button in the top-right.
    4. Finally, the Anatomical Structure Tags accordion menu below can be expanded via a click. By default, this section is empty and is filled automatically as the user moves the tissue block towards the reference organ. Once a collision between an anatomical structure and the tissue block has been detected, the name of the anatomical structure is added to the Anatomical Structure Tags section as a tag. Tags can be removed by clicking on the little X to the right of the tag. Also, tags can be added manually. Note, however, that only entries that match one of the auto-complete suggestions can be added by hand.

## References and Definitions

The below references and definitions were used in writing this Standard Operating Procedure. When available, definitions were taken from the [HuBMAP Dictionary](https://docs.google.com/document/d/1QhxfvoB0g5_EA6COje74z58xQxyEos7nlhc8-_eSFx4/edit), and aligned with standard terminologies used in relevant fields.

## References

- The public Common Coordinate Framework Registration User Interface (CCF RUI): [https://hubmapconsortium.github.io/ccf-ui/rui](https://hubmapconsortium.github.io/ccf-ui/rui/). Accessed on Feb 20, 2021.
- HuBMAP ingest portal: [https://ingest.hubmapconsortium.org](https://ingest.hubmapconsortium.org/).
- The CCF Portal: [https://hubmapconsortium.github.io/ccf](https://hubmapconsortium.github.io/ccf). Accessed on Feb 20, 2021.

## Glossary

**HuBMAP ingest portal** : The HuBMAP ingest portal is where HuBMAP members generate HuBMAP IDs.

**Reference Organ** : A reference organ is a 3D model based on a variety of potential data sources produced by MC-IU. 3D models are created with the involvement of subject matter experts. [This SOP](https://docs.google.com/document/d/1NAISyfVlvXsLLhED0-d-IbIjfTJDzd89VfMqMFGK8Qc/edit#heading=h.cd53uti4az4) outlines the creation of reference organs.

**Standard Operating Procedures (SOPs)**: SOPs are issued to specifically instruct team members in areas of responsibility, procedural steps, appropriate specifications and required records. SOPs outline procedures, which must be followed to support the reproducibility of scientific research. Procedures can take the form of a narrative, a flow chart, a process map, computer screen printouts or combination of all or any other suitable form, however must be written in appropriate, effective grammatical style. (e.g. plain English).

**Tissue Block** : A tissue block is a digital, 3D representation of a tissue sample. In the RUI, tissue blocks are cuboids that the user can spatially register to a reference organ using the workflow [described in this document](#_ncna6se04lzh).

V1.0.0 (03/19/2021)

6of 6