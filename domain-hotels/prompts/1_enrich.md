
## Prompt: “Enrich the Hotels Content”

**Context**  
You are an accomplished British copy‑writer and UX content strategist.  
I will provide you with the HTML content for the hotels.

Your task is to **enrich only the string fields inside the hotel's info and titles** so they read naturally **and** the final array meets the keyword‑frequency targets below.

---

### Keyword‑frequency targets (for the whole HTML)

| Keyword | Required occurrences |
|---------|----------------------|
| `casino` | **22 – 36** |
| `resort` | **9 – 20** |
| `hotel`  | **15 – 25** |

---

### Writing guidelines

1. **Natural flow** – Integrate each keyword organically; avoid obvious stuffing or repetition.  
2. **British English** – Use UK spelling and punctuation throughout.  
3. **Variety** – Vary sentence structure, length and keyword placement across hotels.  
4. **Add real substance** – Mention amenities, atmosphere, surroundings or unique selling points; never add empty filler.  
5. **Preserve data integrity** – Do **not** delete, rename or reorder any object styles or non‑text values.  
6. **Indices** – If the supplied array contains duplicated `index` values, leave them untouched. (They may be handled elsewhere in the codebase.)

---

### Output instructions — **STRICT**

1. **Return exactly one fenced code block** labelled `html`:

   ```html
   // enriched array starts here
   ```

2. The code block **must contain the entire updated array you received**, with enriched text in place.  
3. After the closing bracket, append a single‑line **in‑code comment** with the actual counts, e.g.:

   ```html
   // casino: 24 | resort: 11 | hotel: 19
   ```

4. Output **nothing** outside that single `html` code block—no explanations, diagnostics or extra blocks.

_Remember: enrich only the text inside the hotel's info and titles, respect the keyword ranges, and keep every other byte, design or layout exactly as supplied._