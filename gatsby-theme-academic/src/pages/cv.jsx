import { Button, Row, Col } from 'rsuite';
import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import SEO from '../components/Seo';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class CV extends Component {
  constructor() {
    super();
    this.state = {
      numPages: null,
      pageNumber: 1,
      scale: 1.0,
    };
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
  }

  zoomIn = () => {
    this.setState(prevState => ({
      scale: Math.min(prevState.scale + 0.2, 3.0)
    }));
  }

  zoomOut = () => {
    this.setState(prevState => ({
      scale: Math.max(prevState.scale - 0.2, 0.4)
    }));
  }

  resetZoom = () => {
    this.setState({ scale: 1.0 });
  }

  render() {
    const { pageNumber, numPages, scale } = this.state;
    const pageToggle = () => {
      if (pageNumber === 1) {
        this.setState({ pageNumber: 2 });
      } else {
        this.setState({ pageNumber: 1 });
      }
      return 1;
    };

    return (
      <div>
        <SEO
          title="CV"
          description="My curriculum vitae with comprehensive details of my academic and professional experience, research publications, education, and achievements."
          path="cv"
        />
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Curriculum Vitae</h1>
        </div>
        <Document
          file="/resume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
          onLoadError={this.onDocumentLoadError}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
        <Row justify="center" style={{ background: 'lightslategray', padding: '10px' }} type="flex" gutter={[10, 0]}>
          <Col span={3}>
            <p>{`Page ${pageNumber} of ${numPages}`}</p>
          </Col>
          <Col span={3}>
            <Button type="primary" onClick={pageToggle}>
              {pageNumber === 1 ? 'Next Page' : 'Previous Page'}
            </Button>
          </Col>
          <Col span={2}>
            <Button onClick={this.zoomOut} disabled={scale <= 0.4}>
              Zoom Out
            </Button>
          </Col>
          <Col span={2}>
            <p style={{ margin: 0, lineHeight: '32px' }}>{`${Math.round(scale * 100)}%`}</p>
          </Col>
          <Col span={2}>
            <Button onClick={this.zoomIn} disabled={scale >= 3.0}>
              Zoom In
            </Button>
          </Col>
          <Col span={2}>
            <Button onClick={this.resetZoom}>
              Reset
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}