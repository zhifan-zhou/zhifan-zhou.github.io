"""Build the one-page downloadable resume with ReportLab (python build_resume.py)."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume.pdf"
FONT_DIR = Path("/System/Library/Fonts/Supplemental")
FONT_FILES = {
    "ResumeSerif": "Times New Roman.ttf",
    "ResumeSerif-Bold": "Times New Roman Bold.ttf",
    "ResumeSerif-Italic": "Times New Roman Italic.ttf",
    "ResumeSerif-BoldItalic": "Times New Roman Bold Italic.ttf",
}


def configure_fonts():
    if all((FONT_DIR / file).exists() for file in FONT_FILES.values()):
        for name, file in FONT_FILES.items():
            pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / file)))
        pdfmetrics.registerFontFamily(
            "ResumeSerif",
            normal="ResumeSerif",
            bold="ResumeSerif-Bold",
            italic="ResumeSerif-Italic",
            boldItalic="ResumeSerif-BoldItalic",
        )
        return "ResumeSerif"
    return "Times-Roman"


FONT = configure_fonts()
BODY = ParagraphStyle(
    "Body", fontName=FONT, fontSize=10, leading=12, spaceAfter=2.5
)
TITLE = ParagraphStyle("Name", parent=BODY, fontSize=25, leading=28, alignment=TA_CENTER)
CONTACT = ParagraphStyle("Contact", parent=BODY, alignment=TA_CENTER, spaceAfter=6)
SECTION = ParagraphStyle(
    "Section", parent=BODY, fontSize=11.8, leading=14, spaceBefore=8, spaceAfter=2
)
ITEM_TITLE = ParagraphStyle("ItemTitle", parent=BODY, fontSize=10.5, leading=12.5)
RIGHT = ParagraphStyle("Right", parent=BODY, alignment=TA_RIGHT)
BULLET = ParagraphStyle(
    "Bullet", parent=BODY, leftIndent=11, firstLineIndent=0, bulletIndent=0
)


def paragraph(text, style=BODY):
    return Paragraph(text, style)


def section(story, title):
    story.extend(
        [
            paragraph(title.upper(), SECTION),
            HRFlowable(width="100%", thickness=0.5, color=colors.black, spaceAfter=5),
        ]
    )


def row(left, right, *, title=False):
    table = Table(
        [[paragraph(left, ITEM_TITLE if title else BODY), paragraph(right, RIGHT)]],
        colWidths=[410, 130],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def bullets(story, items):
    story.extend(Paragraph(text, BULLET, bulletText="\u2022") for text in items)


def build():
    story = [
        paragraph("<b>Zhifan Zhou</b>", TITLE),
        paragraph(
            '<link href="mailto:skyzhou@andrew.cmu.edu"><u>skyzhou@andrew.cmu.edu</u></link>'
            " | (+1) 412-352-1112 | (+86) 189-5744-2769",
            CONTACT,
        ),
    ]
    section(story, "Education")
    story.append(row("<b>Carnegie Mellon University</b>", "Pittsburgh, PA", title=True))
    story.append(
        row(
            "<i>B.S. in Information Systems; additional major in Artificial Intelligence</i>",
            "<i>Aug. 2025 - Present</i>",
        )
    )
    bullets(
        story,
        [
            "<b>Expected Graduation:</b> June 2029",
            "<b>Honors:</b> Dean's List, 2026",
            "<b>Selected Coursework:</b> Fundamentals of Programming &amp; Computer Science, "
            "Concepts of Mathematics, Matrices and Linear Transformations, Concepts in Artificial Intelligence",
        ],
    )

    section(story, "Publications")
    story.append(
        paragraph(
            "<b>RSI-Master: Structuring Experiments to Guide Autonomous Model Improvement</b>",
            ITEM_TITLE,
        )
    )
    story.append(
        paragraph(
            '<i>arXiv Preprint</i> | <link href="https://arxiv.org/abs/2609.35561">'
            '<u>arXiv: 2609.35561</u></link> | '
            '<link href="https://github.com/DorothyDUUU/RSI-Master"><u>GitHub: RSI-Master</u></link>'
        )
    )
    bullets(
        story,
        [
            "Developed an autonomous model improvement framework integrating an Experiment OS "
            "with reviewer-guided research orchestration over a dynamic research DAG.",
            "The system achieved a 54.49 average on PostTrainBench versus 46.53 for the strongest agent "
            "baseline, with a 0.0% observed hacking rate.",
        ],
    )
    story.append(Spacer(1, 4))
    story.append(
        paragraph(
            "<b>DataMaster: Data-Centric Autonomous AI Research</b> | <i>arXiv Preprint</i>",
            ITEM_TITLE,
        )
    )
    story.append(
        paragraph(
            '<link href="https://arxiv.org/abs/2605.10906"><u>arXiv: 2605.10906</u></link>'
            ' | <link href="https://github.com/sjtu-sai-agents/DataMaster"><u>GitHub: DataMaster</u></link>'
        )
    )
    bullets(
        story,
        [
            "Developed an autonomous framework for discovering, selecting, and cleaning external data "
            "to improve downstream machine learning and post-training performance.",
            "Designed a tree-structured search architecture with a shared data pool, enabling exploration "
            "of open-ended data spaces while preserving global memory across branches.",
            "Increased the MLE-Bench Lite medal rate by 32.27% and outperformed the instruct baseline "
            "on PostTrainBench GPQA by 0.67 percentage points.",
        ],
    )

    section(story, "Relevant Experience")
    experiences = [
        (
            "Research Intern", "May 2026 - Present",
            '<link href="https://idt.eitech.edu.cn/nlp/#/"><u>NLP Lab, Eastern Institute of Technology</u></link>',
            "Ningbo, China",
            [
                "Develop a streaming omni model for real-time multimodal interaction using a full-duplex "
                'training paradigm, under the supervision of <link href="https://scholar.google.com/citations?hl=en&amp;user=BWfPrE4AAAAJ"><u>Prof. Xiaoyu Shen</u></link>.',
                "Develop post-training data pipelines by curating omni-modal conversational datasets, "
                "aligning cross-modal signals, and defining fine-grained timestamp annotations for precise temporal supervision.",
            ],
        ),
        (
            "Research Intern", "Feb. 2026 - Present",
            "MAGIC Lab, Shanghai Jiao Tong University", "Shanghai, China",
            [
                'Conduct research on self-evolving agents and AI-for-science systems under <link href="https://scholar.google.com/citations?user=W_Q33RMAAAAJ&amp;hl=en"><u>Prof. Siheng Chen</u></link>.',
                "Contribute to projects spanning multi-agent governance, autonomous AI systems, and scientific discovery workflows.",
            ],
        ),
    ]
    for index, (role, period, organization, location, details) in enumerate(experiences):
        if index:
            story.append(Spacer(1, 5))
        story.append(row(f"<b>{role}</b>", period, title=True))
        story.append(row(f"<i>{organization}</i>", f"<i>{location}</i>"))
        bullets(story, details)

    section(story, "Technical Skills")
    for label, text in [
        ("Programming Languages", "Python, Java, C"),
        ("Libraries &amp; Frameworks", "PyTorch, NumPy, pandas, Matplotlib"),
        ("Languages", "Mandarin Chinese (Native), English (Professional Working Proficiency)"),
        ("Interests", "Basketball, Table Tennis, Badminton, Tennis, Go (1 dan), Taekwondo (Red-Black Belt)"),
    ]:
        story.append(paragraph(f"<b>{label}:</b> {text}"))

    document = SimpleDocTemplate(
        str(OUTPUT), pagesize=letter,
        rightMargin=36, leftMargin=36, topMargin=25, bottomMargin=25,
        title="Zhifan Zhou - Resume", author="Zhifan Zhou",
    )
    document.build(story)
    print(f"Built {OUTPUT}")


if __name__ == "__main__":
    build()
