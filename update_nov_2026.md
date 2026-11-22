# Lambda Technologies website update plan

November 2026

Modernise the homepage with a three-slide background slideshow, clearer capability statements, a feature for Lambda Technologies’ 12dAZ Converter, and an introduction to CCMap’s experimental map integration for CADCraft.

## 1. Add a background slideshow to the hero

Replace the single background image at the top of the homepage with exactly three slides. Keep the main heading, introductory copy and project enquiry button in a fixed position as the slides change. Remove the current boxed capability diagram to give the imagery more space, and use a short caption to identify the capability shown in each slide.

| Slide | Capability | Background imagery |
| --- | --- | --- |
| 1 | FPGA development | Show an FPGA development board being tested on an electronics workbench. |
| 2 | Telecommunications | Show a field technician inspecting fibre equipment at a telecommunications site. |
| 3 | CAD and civil infrastructure | Blend a 12dAZ-style DXF survey drawing with a CCMap-style satellite view of the same fictional site. Keep the road, survey points and mapped property boundaries visible in the mobile crop. |

- Use a subtle crossfade and a dark overlay that keeps text and controls readable on every image.
- Provide previous and next buttons, three slide selectors and a pause/play control. Make them keyboard-accessible and clearly indicate the current slide.
- Show the first slide immediately and load the other images after it. Use responsive image sizes to limit the download on mobile.
- Disable automatic rotation and crossfades when the visitor prefers reduced motion. Keep manual slide navigation available.

## 2. Update the Products section

### 12dAZ Converter

Replace the featured SLD Accelerator panel with a 12dAZ Converter panel. Describe it as Lambda Technologies’ product for converting `.12daz` and `.12da` files to editable DXF, with Flatten 2D and Keep Z options. Explain that both editions offer Windows x64 ZIPs. The open-source Python edition also offers MIT-licensed source, and the closed-source Rust edition adds background maps, MGA projection suggestions and a skipped-geometry preview. Use “Visit 12dAZ Converter” to link to the [12dAZ Converter download site](https://12daz-downloads-website.vercel.app/).

Remove the outbound link to `sld-accelerator.com`. Update the featured section’s heading and imagery to suit the converter. Keep the Products navigation link and the existing `#products` anchor. Keep Single Line Diagram drafting in the services copy where it describes work Lambda Technologies offers.

### CCMap and experimental CADCraft map integration

Add a project card alongside the 12dAZ Converter entry. Credit the ArtCraft team for creating the open-source CADCraft drafting application. Present CCMap as Lambda Technologies’ fork for the experimental map integration. Use “View CCMap on GitHub” as the link text. [CCMap fork](https://github.com/Ala-Ismail/CCMap)

Illustrate the fork’s enhancement with yellow property boundaries over fictional satellite imagery in a CADCraft-style workspace. Caption the graphic “Illustrative CADCraft view”.

Suggested website copy

> CADCraft is an open-source drafting application created by the ArtCraft team. Lambda Technologies forked it as CCMap to develop experimental map backgrounds, including OpenStreetMap streets, Google satellite view and Esri World Imagery. The maps provide a view-only reference that can align with Australian MGA coordinates while leaving drawing geometry and exports unchanged.

The desktop **View → Map** menu supports OpenStreetMap, Google satellite imagery and Esri World Imagery. Users can select the drawing’s coordinate reference system or use matching points to align the map visually. Google and Esri require provider API keys. Link to the fork’s setup notes for details. [CADCraft map background documentation](https://github.com/Ala-Ismail/CCMap#map-backgrounds)

## 3. Rewrite the statement of capabilities

Use this copy for the homepage Capabilities section.

### FPGA development, CAD automation and telecom drafting

Lambda Technologies designs and integrates FPGA and embedded systems, automates engineering drawing workflows, and produces technical documentation for telecommunications networks. We help teams bring up new hardware, diagnose integration issues and maintain existing systems.

| Capability | Website copy |
| --- | --- |
| FPGA and embedded systems | We develop Verilog and VHDL designs, write embedded firmware, and support hardware bring-up, timing closure and system integration. |
| CAD and drafting automation | We build AutoCAD and BricsCAD tools, including LISP routines, to automate drawing production, extract drawing data and process markups. |
| Telecommunications drafting | We prepare network drawings and Single Line Diagrams, document proposed changes and assess their impact on existing designs. |
| Interfaces and protocols | We implement and validate SPI, UART and I²C interfaces and serial encoder protocols including EnDat, BiSS and HIPERFACE DSL. |
| Functional safety engineering support | We support the design, integration and validation of industrial safety functions and communications, including FSoE, safe torque off (STO), safe stop 1 (SS1) and safety I/O diagnostics. |
| Altera and Intel FPGA platforms | We develop and maintain Quartus projects, support migrations and design Remote System Update workflows. |
| Custom engineering software | We build tools that connect engineering systems, convert files and automate repeatable project tasks. |

Use the same capability wording in the hero summary and review the Services and About sections for consistency. Keep the details for 12dAZ Converter and CCMap in Products.

## 4. Implement and verify

1. Extract the slideshow into a small client component used by `app/page.js`. Update `app/globals.css` for the hero layout, responsive image crops, controls and reduced-motion behaviour. Store any new images in `public/images/`.
2. Update the Products and Capabilities sections in `app/page.js`. Review the hero, Services and About copy for consistency, and check the homepage for any remaining links to the former product site.
3. Run `npm run build`. Check the homepage on desktop and mobile for readable hero text, stable layout, exactly three slides, working keyboard controls and correct reduced-motion behaviour.
4. Follow the Products navigation link and check the links to the 12dAZ Converter site, the CCMap GitHub fork and the map setup documentation. Confirm that the CCMap integration is labelled experimental and the old SLD Accelerator URL is absent from the rendered homepage.
