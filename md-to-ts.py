import os

def process_markdown_file(file_path: str):
    """
    Processes a markdown file to extract the content of its last '```blocks ... ```' segment.
    The extracted content is then wrapped in a TypeScript namespace named after the file
    and saved to a new .ts file within a 'tests' subdirectory. The original .md file is kept.

    Args:
        file_path (str): The full path to the Markdown file to be processed.
    """
    try:
        # 1. Read the entire content of the Markdown file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Define the markers for the code block
        start_marker = '```blocks\n'
        end_marker = '\n```'

        # Find the last occurrence of the '```blocks' start marker
        last_blocks_start_index = content.rfind(start_marker)

        if last_blocks_start_index == -1:
            print(f"  No '```blocks' segment found in '{file_path}'. Skipping.")
            return

        # Get the substring of the content starting from the character right after the last '```blocks'
        content_after_last_blocks = content[last_blocks_start_index + len(start_marker):]

        # Find the first '```' closing marker in this substring.
        blocks_end_index = content_after_last_blocks.find(end_marker)

        if blocks_end_index == -1:
            print(f"  Malformed '```blocks' segment (missing closing '```') in '{file_path}'. Skipping.")
            return

        # Extract the raw code block content
        extracted_code = content_after_last_blocks[:blocks_end_index].strip()

        # 2. Prepare the new file path and namespace name
        # Get the base name of the original file (e.g., 'bees-5-6.md')
        base_name = os.path.basename(file_path)
        # Get the directory name of the original file
        dir_name = os.path.dirname(file_path)

        # Ensure the file actually has a .md extension before attempting to change it
        if not base_name.lower().endswith('.md'):
            print(f"  '{file_path}' is not a .md file. Skipping.")
            return

        # Create the new file name by removing the '.md' extension
        new_file_name_base = base_name.rsplit('.', 1)[0]

        # Define the 'tests' subdirectory path
        tests_dir = os.path.join(dir_name, 'tests')

        # Create the 'tests' directory if it doesn't exist
        os.makedirs(tests_dir, exist_ok=True)

        # Construct the full path for the new .ts file within the 'tests' directory
        new_file_path = os.path.join(tests_dir, new_file_name_base + '.ts')

        # Derive the namespace name from the new file name base (e.g., 'bees-5-6' -> 'bees_5_6')
        namespace_name = new_file_name_base.replace('-', '_')

        # 3. Wrap the extracted code in a TypeScript namespace
        ts_content = f"namespace {namespace_name} {{\n{extracted_code}\n}}"

        # 4. Write the wrapped code to the new .ts file
        with open(new_file_path, 'w', encoding='utf-8') as f:
            f.write(ts_content)

        print(f"Successfully created '{new_file_path}'. Original file '{file_path}' remains untouched.")

    except FileNotFoundError:
        print(f"Error: File not found at '{file_path}'. Please check the path.")
    except Exception as e:
        print(f"An unexpected error occurred while processing '{file_path}': {e}")

def process_curriculum_folder(folder_path="curriculum"):
    """
    Iterates through all .md files in the specified folder and its subdirectories,
    and processes each one using the 'process_markdown_file' function.

    Args:
        folder_path (str): The path to the 'curriculum' folder.
                           Defaults to 'curriculum', assuming it's in the same
                           directory where the script is run.
    """
    if not os.path.isdir(folder_path):
        print(f"Error: Directory '{folder_path}' not found. Please ensure the 'curriculum' folder exists.")
        return

    print(f"Starting to process markdown files in '{folder_path}'...")
    # Walk through the directory and its subdirectories
    for root, _, files in os.walk(folder_path):
        for file in files:
            # Process only files with a '.md' extension (case-insensitive)
            if file.lower().endswith('.md'):
                full_file_path = os.path.join(root, file)
                print(f"Attempting to process '{full_file_path}'...")
                process_markdown_file(full_file_path)
    print("Processing complete.")

# --- Main execution block ---
if __name__ == "__main__":
    process_curriculum_folder(os.path.join(os.getcwd(), 'curriculum'))
