#!/usr/bin/env python3
"""
Extract questions from PDFs in the addi folder
"""

import os
import sys

try:
    import pdfplumber
    HAS_PDFPLUMBER = True
except ImportError:
    try:
        import PyPDF2
        HAS_PYPDF2 = True
    except ImportError:
        HAS_PDFPLUMBER = False
        HAS_PYPDF2 = False

def extract_text_pdfplumber(pdf_path):
    """Extract text using pdfplumber"""
    text = ""
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"
    except Exception as e:
        print(f"Error extracting with pdfplumber: {e}")
    return text

def extract_text_pypdf2(pdf_path):
    """Extract text using PyPDF2"""
    text = ""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page in pdf_reader.pages:
                text += page.extract_text() + "\n"
    except Exception as e:
        print(f"Error extracting with PyPDF2: {e}")
    return text

def extract_pdf_text(pdf_path):
    """Extract text from PDF using available library"""
    if HAS_PDFPLUMBER:
        return extract_text_pdfplumber(pdf_path)
    elif HAS_PYPDF2:
        return extract_text_pypdf2(pdf_path)
    else:
        return None

def main():
    addi_folder = "addi"
    if not os.path.exists(addi_folder):
        print(f"Folder {addi_folder} not found!")
        return
    
    pdf_files = [f for f in os.listdir(addi_folder) if f.endswith('.pdf')]
    
    if not pdf_files:
        print("No PDF files found in addi folder")
        return
    
    print(f"Found {len(pdf_files)} PDF files")
    
    # Check if we have PDF libraries
    if not HAS_PDFPLUMBER and not HAS_PYPDF2:
        print("\n⚠️  No PDF extraction library found!")
        print("Please install one of:")
        print("  pip install pdfplumber")
        print("  pip install PyPDF2")
        print("\nFor now, creating structure based on file names...")
        return
    
    # Extract text from each PDF
    extracted_content = {}
    for pdf_file in pdf_files:
        pdf_path = os.path.join(addi_folder, pdf_file)
        print(f"\nExtracting: {pdf_file}...")
        text = extract_pdf_text(pdf_path)
        if text:
            extracted_content[pdf_file] = text
            # Save to text file for review
            output_file = pdf_path.replace('.pdf', '_extracted.txt')
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(text)
            print(f"  ✓ Extracted {len(text)} characters")
            print(f"  ✓ Saved to {output_file}")
        else:
            print(f"  ✗ Failed to extract text")
    
    return extracted_content

if __name__ == "__main__":
    main()
