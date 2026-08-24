# Design QA

- Source visual truth: `/Users/lunaecho/.codex/generated_images/01a01e4e-b098-7b21-8f65-dfd6edc92648/exec-8b0c2ad4-38dd-488b-827b-4090ef58cd23.png`
- Desktop implementation: `/Users/lunaecho/Documents/openclaw/AI-test/qa-16x9-role-1920x1080.png`
- Studio implementation: `/Users/lunaecho/Documents/openclaw/AI-test/qa-16x9-home-1920x1080.png`
- 2K implementation: `/Users/lunaecho/Documents/openclaw/AI-test/qa-16x9-role-2560x1440.png`
- Laptop form implementation: `/Users/lunaecho/Documents/openclaw/AI-test/qa-responsive-laptop-form.png`
- Portrait cover implementation: `/Users/lunaecho/Documents/openclaw/AI-test/qa-responsive-portrait-role-v2.png`
- Browser: Codex in-app browser
- Source pixels: `1672 × 941`, normalized to `1920 × 1080` for the latest comparison; implementation pixels and CSS viewport: `1920 × 1080`; device scale factor: `1`
- Additional CSS viewports: `2560 × 1440`, `1366 × 768` and `390 × 844`
- State: role selection and role-login form after the intro and login transition

## Full-view comparison evidence

The source was normalized and opened with the implementation at the same `1920 × 1080` size. The stage composition, speech bubble, student/admin assets, fox, platform, background and relative component sizes remain aligned. The implementation's 90% scene brightness and slightly lowered role assets are intentional saved requirements.

The exact 16:9 rule was checked at `1920 × 1080` and `2560 × 1440`. The intro, newsroom stage and login-transition stage all measured from `(0, 0)` to the full viewport with ratio `1.7777777777777777`, no top/bottom crop, no letterboxing and no body overflow. At non-16:9 sizes, the stage remains centered and uses controlled cover cropping instead of stretching.

## Focused-region evidence

The login panel was checked at `1366 × 768`. Its heading, badge, two fields, primary action, switch, divider and alternative-login controls all scale from the same stage container. The form remains readable and preserves the selected illustrated proportions.

## Required fidelity surfaces

- Fonts and typography: all login text now scales in container-relative units, so type remains proportional to the fixed artwork stage instead of changing independently with viewport width or height.
- Spacing and layout rhythm: panel and role assets retain percentage positions; the entire scene is uniformly scaled before viewport cropping.
- Colors and visual tokens: existing cream, cyan, fox-orange and dark-blue tokens are unchanged.
- Image quality and asset fidelity: supplied bubble, role buttons, newsroom, lighting and fox assets are unchanged and never stretched non-uniformly.
- Copy and content: all existing Chinese labels and role-specific login copy are preserved.

## Interaction verification

- Intro clears to the studio and the studio login control remains operable.
- Login triggers blackout and the second transition.
- Student and administrator role controls remain clickable.
- Student and teacher login forms open correctly; return control works.
- Browser console errors/warnings checked: none.

## Findings

No actionable P0, P1 or P2 issue remains.

## Comparison history

1. Initial responsive pass found a P2 portrait issue: an oversized cover stage was cropped from the left edge because grid overflow alignment fell back to start alignment.
2. The intro video, login-transition stage and newsroom stage frame were explicitly centered with `50%` positioning and `translate(-50%, -50%)`.
3. Post-fix portrait evidence shows a centered `1499.64 × 844` stage inside a `390 × 844` viewport, with no scroll overflow. Bubble and role-button aspect ratios remain unchanged.
4. A later P2 precision check found that the inherited `1672:941` ratio was about `0.05%` narrower than 16:9, causing sub-pixel vertical cover cropping on exact 16:9 displays.
5. All three stages were moved to the exact `16/9` and `9/16` formulas. Post-fix measurements at both Full HD and 2K show exact viewport bounds and zero vertical crop.

final result: passed
