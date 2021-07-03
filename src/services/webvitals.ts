import * as wv from 'web-vitals'

export default function reportWebVitals (onPerfEntry?: wv.ReportHandler):void {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    wv.getCLS(onPerfEntry);
    wv.getFID(onPerfEntry);
    wv.getFCP(onPerfEntry);
    wv.getLCP(onPerfEntry);
    wv.getTTFB(onPerfEntry);
  }
}

