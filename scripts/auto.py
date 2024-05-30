from openai import OpenAI

import datetime
import re

client = OpenAI(api_key="sk-proj-0AeoCsMyhQLkkfEkKvK1T3BlbkFJIketFgCXZsQfssnQFcTe")

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
    with open(filename, 'w', encoding='utf-8') as file:
        file.write(content)

def main():
    # Array of prompts to guide the blog post generation
   


    prompts = [
        "Crafting Effective Responses to Government Contract RFPs and RFQs",
        "Resolving Contract Disputes with Government Agencies",
        "Using Government Contracting to Enter New Markets and Diversify Your Business",
        "The Impact of Federal Acquisition Streamlining Act (FASA) on Contracting Processes",
        "Developing a Competitive Edge in the Government Contracting Marketplace",
        "Understanding Contract Financing Options for Government Projects",
        "Ensuring Compliance with Government Contract Reporting Requirements",
        "The Importance of Ethics Training for Employees Working on Government Contracts",
        "Navigating the False Claims Act: Protecting Your Business from Liability",
        "Understanding Indirect Cost Rates in Government Contracts",
        "Effective Subcontractor Management for Government Projects",
        "Preparing for a Defense Contract Audit Agency (DCAA) Audit",
        "Using E-Verify for Government Contract Compliance",
        "Managing Contract Data Requirements Lists (CDRLs) in Government Projects",
        "The Pre-Award Survey: What It Is and How to Prepare",
        "Developing a Conflict of Interest Policy for Government Contracting",
        "Using Beta.SAM.gov to Find and Pursue Government Contract Opportunities",
        "The Contracting Officer Representative's Role in Contract Management",
        "Navigating International Traffic in Arms Regulations (ITAR) in Government Contracts",
        "The Impact of Defense Federal Acquisition Regulation Supplement (DFARS) on Contractors",
        "Developing a Targeted Marketing Strategy for Government Contracting",
        "Understanding Cost Accounting Standards (CAS) for Government Contracts",
        "Using Federal Business Opportunities (FBO) to Find Government Contract Leads",
        "Implementing Earned Value Management (EVM) in Government Projects",
        "Navigating the Service Contract Act for Government Contractors",
        "Leveraging Procurement Technical Assistance Centers (PTACs) for Contracting Success",
        "Using GovWin IQ for Government Contracting Market Intelligence",
        "The Impact of Section 809 Panel Recommendations on Defense Acquisition",
        "Building a Winning Government Contract Bid Team",
        "Supply Chain Management Best Practices for Government Contractors",
        "Ensuring Compliance with Export Control Regulations in Government Contracts",
        "Labor Compliance Essentials for Government Contractors",
        "Using Reverse Auctions for Government Procurement",
        "The Importance of Performance Evaluations for Government Contractors",
        "Navigating the Federal Procurement Data System (FPDS)",
        "The Impact of the National Defense Authorization Act (NDAA) on Contracting",
        "Developing a Comprehensive Government Contracting Training Program",
        "Preparing for a Contractor Purchasing System Review (CPSR)",
        "Using Capabilities Statements to Market Your Business to Government Agencies",
        "Implementing Continuous Improvement Practices in Government Contracting",
        "Leveraging Technology for Contract Performance Monitoring",
        "The Role of Government-Wide Acquisition Contracts (GWACs) in Procurement",
        "Navigating Defense Contract Management Agency (DCMA) Requirements",
        "The Impact of Federal Information Security Modernization Act (FISMA) on Contractors",
        "Developing an Effective Indirect Cost Allocation Plan",
        "The Advantages of Task Order Contracts for Government Projects",
        "Preparing for a Government Contract Debriefing",
        "The Importance of Contract Closeout Administration",
        "Navigating Office of Federal Contract Compliance Programs (OFCCP) Requirements",
        "Exploring Government Contract Financing Options",
        "Leveraging Small Business Administration (SBA) Resources for Contracting Success",
        "The Impact of Federal Acquisition Certification (FAC) Training on Contracting Professionals",
        "Developing a Government Contracting Compliance Checklist",
        "Implementing an Earned Value Management System (EVMS) for Government Projects",
        "Using GSA eBuy for Targeted Government Contract Opportunities",
        "The Importance of Accurate and Timely Invoicing in Government Contracting",
        "Navigating Subcontracting Plan Requirements for Large Contractors",
        "The Benefits of Defense Acquisition University (DAU) Training for Contractors",
        "Using the Procurement Integrated Enterprise Environment (PIEE) for Contract Management",
        "The Impact of Small Business Innovation Research (SBIR) Grants on Contractors",
        "Developing a Comprehensive Government Contracting Proposal Library",
        "Managing Government Contract Terminations",
        "Using the System for Award Management (SAM) Exclusions List to Vet Subcontractors",
        "The Critical Role of Contract Administration in Government Projects",
        "Navigating the Complexities of Government Contract Pricing",
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