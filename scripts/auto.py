from openai import OpenAI

import datetime
import re

client = OpenAI(api_key="sk-proj-qQtkD95pGRVmTQOd3vgST3BlbkFJPjMOe8hARjS1562e5jmO")

def generate_blog_post(prompt):
    """
    Generate a markdown formatted blog post based on the given prompts.
    
    Args:
        prompts (list): A list of prompts to guide the blog post generation.
        
    Returns:
        str: The generated blog post content.
    """
    # Combine prompts into a single prompt string
   

    # Add instructions to ensure the response is formatted correctly
    full_prompt = (
        "Generate a markdown formatted blog post based on the following prompt. "
        "Ensure the response includes a properly formatted header with title, date, tags, draft, and summary. "
        "Follow this format for the header: \n"
        "---\n"
        "title: 'Your Title Here'\n"
        "date: 'YYYY-MM-DD'\n"
        "tags: ['Tag1', 'Tag2']\n"
        "draft: false\n"
        "summary: 'Your summary here.'\n"
        "---\n\n"
        "Below the header, write a long, engaging, technically advanced, and fun-to-read blog post with proper markdown formatting. "
        "The blog post should be based on the following topic: and your response should only contain the properly formatted markdown header and markdown formatted blog post\n\n"
        f"{prompt}"
    )

    response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {
        "role": "system",
        "content": [
            {
            "type": "text",
            "text": "You are a online blogger who writes about technology and innovation. You write in a manor that is energizing optimistic and maintain a blanace of technical depth and readability. you use markdown formatting and always properly format header and body"
            }
        ]
        },
        {
        "role": "user",
        "content": [
            {
            "type": "text",
            "text": full_prompt,
            }
        ]
        }
    ],
    temperature=1,
    max_tokens=3000,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    )
    print()

    print("Typeof", type(response))
    print("Response", response)
    
    return response.choices[0].message.content

def extract_title(content):
    """
    Extract the title from the generated blog post content and sanitize it for use as a filename.
    
    Args:
        content (str): The generated blog post content.
        
    Returns:
        str: The sanitized title suitable for use as a filename.
    """
    title_pattern = r"title:\s*'(.+)'"
    match = re.search(title_pattern, content)
    if match:
        title = match.group(1)
    else:
        title = "default_title"

    # Sanitize the title to make it a valid filename
    sanitized_title = re.sub(r'[^\w\s-]', '', title).strip().lower()
    sanitized_title = re.sub(r'[-\s]+', '_', sanitized_title)
    return sanitized_title


def save_to_markdown(content, filename):
    """
    Save the blog post content to a markdown file.
    
    Args:
        content (str): The blog post content.
        filename (str): The name of the file to save the content to.
    """
    with open(filename, 'w') as file:
        file.write(content)

def main():
    # Array of prompts to guide the blog post generation
    prompts = [
        "Write a blog post about how quantum computing is revolutionizing cybersecurity.",
        "Discuss the potential impacts of quantum computing on data encryption.",
        "Explain the challenges and opportunities in the field of quantum cybersecurity."
    ]

    

    for prompt in prompts:
        print(f"Prompt: {prompt}")
        # Generate blog post content
        content = generate_blog_post(prompt)

        # Extract the title from the generated content
        title = extract_title(content)

        # Generate a filename based on the title
        filename = re.sub(r'[^\w\-_\. ]', '_', title).lower().replace(' ', '_') + ".md"

        # Save content to markdown file
        save_to_markdown(content, filename)

        print(f"Blog post saved to {filename}")

if __name__ == "__main__":
    main()