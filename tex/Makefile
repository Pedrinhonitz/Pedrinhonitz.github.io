ENGINE := pdflatex
OUTDIR := ../pdf
PDFS := $(OUTDIR)/curriculo-pt.pdf $(OUTDIR)/curriculo-en.pdf $(OUTDIR)/curriculo-es.pdf
AUX := $(OUTDIR)/*.aux $(OUTDIR)/*.log $(OUTDIR)/*.out

.PHONY: all clean

all: $(PDFS) $(OUTDIR)/curriculo.pdf

$(OUTDIR)/%.pdf: %.tex
	mkdir -p $(OUTDIR)
	$(ENGINE) -interaction=nonstopmode -output-directory=$(OUTDIR) $<
	$(ENGINE) -interaction=nonstopmode -output-directory=$(OUTDIR) $<
	rm -f $(AUX)

$(OUTDIR)/curriculo.pdf: $(OUTDIR)/curriculo-pt.pdf
	cp $< $@

clean:
	rm -f $(AUX)
