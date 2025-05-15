## Prompt: "Write the Website Copy"

**Context**  
You are an accomplished British copy-writer and UX content strategist.  
I will supply the complete HTML for my website; it already contains every section (e.g. `HERO`, `ABOUT US`, `SERVICES`, `PRICING`, `FAQ`, `CONTACT`, `FOOTER`).

**Goal**

1. Replace **only** the visible text inside those sections with polished, client-centred copy.
2. Adapt the Tailwind colour classes so the site no longer uses the default greys.
   - Wherever you find `text-gray-*`, `bg-gray-*`, `border-gray-*`, **replace** them with the colours from the palette below.
   - Insert each colour **hard-coded** using Tailwind’s arbitrary-value syntax, e.g. `bg-[#123456]`, `text-[#ABCDEF]`, `border-[#FEDCBA]`.
   - Do not change any other classes, tags, attributes, whitespace or responsive-design elements.

**Website topic**: **[YOUR_SPECIFIC_TOPIC]**

**Topic description**

1. What it is

   - ssss
   - ssss

2. Why it works

   - ssss
   - ssss
   - ssss
   - ssss

3. Monetisation
   - ssss
   - ssss
   - ssss
   - ssss

**Colour palette (hard-coded Tailwind values)**

- Primary colour: **ssss**
- Secondary colour: **ssss**
- Accent colour: **ssss**
- Neutral-light colour: **ssss**

**Company details**

- Company Name: **[CHANGE_NAME]**
- Domain: **[CHANGE_DOMAIN]**
- Address: **[CHANGE_ADDRESS]**
- Email: **support@[CHANGE_DOMAIN]**
- Date: **May 15, 2025**

---

### Writing brief

1. **Tone & Voice**

   - Formal, professional British English.
   - Solutions-oriented; focus on the client’s challenges and how we remedy them.
   - Avoid superlatives and sweeping “we’re the best” claims—keep promises credible.

2. **Lexical requirements**

   - **Never** use the word “luxury”; prefer refined synonyms (e.g. “premium”, “up-market”, “first-class”).
   - **Never** use the word “transform/transformative”; choose alternatives (e.g. “elevate”, “enhance”, “revitalise”).

3. **Service modality**

   - Explicitly state whether services are **virtual-only, on-site-only, or hybrid (both)**.

4. **Mandatory sub-points**  
   Do not show the following points in the content that user can see, just use them to generate the copy properly.
   They are important for undestanding the topic and the service.
   - **1. What it is**
   - **2. Why it works**
   - **3. Monetisation**

5. **Be sure to use the Company details**.
   - Use the domain name, company name, email and address in the copy.
   - If there are any placeholders, fields (e.g., `[change]`), delete them or replace them with the company details.

---

### Output instructions — **STRICT**

1. **Return exactly one code block** fenced with three back-ticks followed by `html`:

   ```html
   <!-- entire, updated HTML goes here -->
   
2. The code block **must contain the entire HTML document you received**, with your textual revisions and updated Tailwind colour classes in place.

3. Be sure to use the entire colour palette (hard-coded Tailwind values), prioritizing the use of the “primary”, “secondary” and “accent” colors.

4. **Do not** output anything—no explanations, no extra code blocks, no stray characters—*before* the opening ```html fence or *after* the closing ``` fence.


_Remember: alter only the text and the specified Tailwind colour utilities; preserve every other part of the markup._