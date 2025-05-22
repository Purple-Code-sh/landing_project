# Prompt: "Write the Legals Page Copy"

- Generate copy (content) for the **[YOUR_PAGE]** page so that the layout or content mirrors the provided one, but paraphrase any text from that (mantaining the central ideas or legal terms), aligned with **[YOUR_SPECIFIC_TOPIC]**.

## Company details

Use the following information to fill the company details:

- Company Name: **[CHANGE_NAME]**
- Domain: **[CHANGE_DOMAIN]**
- Address: **[CHANGE_ADDRESS]**
- Email: **support@[CHANGE_DOMAIN]**
- Date: **May 15, 2025**

## Code & Structure

- Only modify content within **[YOUR_PAGE]**.  
- Retain the existing markup or code structure outside of **[YOUR_PAGE]**.  
- If there are any placeholders, fields (e.g., `[change]`), or brand references, replace them with the company details.

### Email & Links

- Whenever you mention an email address, present it as an interactive link using the primary color of the website, and ensure it has a hover effect that underlines the text.  
- Apply the same color style and hover underline to any links directed to other pages.

## Output Format

- Deliver the updated **[YOUR_PAGE]** in the same format or markup as the rest of the code.
- Deliver the full **HTML**. Including doctype, head and body tags.
- Ensure the updated content is within the `<main>` tag.

## Sample Structure

```html
<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>[YOUR_PAGE] | [CHANGE_NAME]</title>
    <link rel="icon" href="/home-assets/logo/logo.webp" type="image/png" />

    <link rel="stylesheet" href="/src/style.css" />
    <link rel="stylesheet" href="/src/main.css" />
  </head>
  <body>
    <!-- Navbar -->

    <!-- Main Content -->
    <main class="pb-16 pt-24">
      <!-- Here goes all the content of the **[YOUR_PAGE]** -->
    </main>

    <!-- Footer -->

    <script src="/src/navbar-script.js" defer></script>
  </body>
</html>
```

## Sample Content

Here is the sample content that you may use:

[Place your paraphrased text or layout here, following all guidelines above]
