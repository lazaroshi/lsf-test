// the following annotation and serializedAnnotation were copied from inspector console

const exampleAnnotation = {
  id: "rJlGI",
  pk: null,
  selected: true,
  type: "annotation",
  createdDate: "2022-11-30T15:13:25.843",
  createdAgo: null,
  createdBy: "Admin",
  loadedDate: 1669839206776,
  leadTime: null,
  draft: false,
  userGenerate: true,
  update: false,
  sentUserGenerate: true,
  localUpdate: false,
  honeypot: false,
  skipped: false,
  history: {
    undoIdx: 3,
    targetPath: "../areas",
    skipNextUndoState: false,
    createdIdx: 0,
  },
  dragMode: false,
  editable: true,
  relationMode: false,
  relationStore: {
    _relations: [],
    showConnections: true,
  },
  areas: {
    WvPUm80OUq: {
      pid: "TPdo2t6DdX",
      score: null,
      readonly: false,
      hidden: false,
      parentID: null,
      meta: {},
      normInput: null,
      id: "WvPUm80OUq",
      results: [
        {
          id: "3K2viHuPOj",
          score: null,
          from_name: "tag",
          to_name: "img",
          type: "rectanglelabels",
          value: {
            rectanglelabels: ["Hello"],
          },
        },
      ],
      type: "rectangleregion",
      object: "img",
      x: 70,
      y: 165,
      width: 60,
      height: 55,
      rotation: 0,
      coordstype: "px",
    },
    _PR5gDH2bF: {
      pid: "iiksR_Zz7s",
      score: null,
      readonly: false,
      hidden: false,
      parentID: null,
      meta: {},
      normInput: null,
      id: "_PR5gDH2bF",
      results: [
        {
          id: "bTHrWK1W5K",
          score: null,
          from_name: "tag",
          to_name: "img",
          type: "rectanglelabels",
          value: {
            rectanglelabels: ["World"],
          },
        },
      ],
      type: "rectangleregion",
      object: "img",
      x: 183,
      y: 24,
      width: 62,
      height: 61,
      rotation: 0,
      coordstype: "px",
    },
  },
  regionStore: {
    sort: "date",
    sortOrder: "desc",
    group: "type",
    view: "regions",
  },
};

const exampleSerializedAnnotation = [
  {
    original_width: 2242,
    original_height: 2802,
    image_rotation: 0,
    value: {
      x: 18.666666666666668,
      y: 35.18123667377399,
      width: 16,
      height: 11.727078891257996,
      rotation: 0,
      rectanglelabels: ["Hello"],
    },
    id: "WvPUm80OUq",
    from_name: "tag",
    to_name: "img",
    type: "rectanglelabels",
  },
  {
    original_width: 2242,
    original_height: 2802,
    image_rotation: 0,
    value: {
      x: 48.8,
      y: 5.11727078891258,
      width: 16.533333333333335,
      height: 13.00639658848614,
      rotation: 0,
      rectanglelabels: ["World"],
    },
    id: "_PR5gDH2bF",
    from_name: "tag",
    to_name: "img",
    type: "rectanglelabels",
  },
];
