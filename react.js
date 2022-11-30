const taskConfig = `
<View>
<Image name="img" value="$image"></Image>
<RectangleLabels name="tag" toName="img">
  <Label value="Hello"></Label>
  <Label value="World"></Label>
</RectangleLabels>
</View>
`;

const taskInterfaces = [
  "side-column",
  "annotations:menu",
  "annotations:add-new",
  "annotations:delete",
  "submit",
  "panel",
  "controls",
];

const LabelStudioWrapper = (props) => {
  const rootRef = React.useRef(null);
  const lsfRef = React.useRef(null);

  React.useEffect(() => {
    if (rootRef.current) {
      lsfRef.current = new LabelStudio(rootRef.current, {
        config: taskConfig,
        interfaces: taskInterfaces,
        task: props.task,
        onLabelStudioLoad(ls) {
          ls.annotationStore.selectAnnotation(
            ls.annotationStore.addAnnotation({
              userGenerate: true,
            }).id
          );
        },
        onSubmitAnnotation(ls, annotation) {
          console.log(annotation);
          console.log(annotation.serializeAnnotation());
        },
      });
    }
  }, [props.task]);

  return <div ref={rootRef} className="label-studio-root" />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LabelStudioWrapper
    task={{
      annotations: [exampleAnnotation],
      predictions: [],
      id: 1,
      data: {
        image:
          "https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg",
      },
    }}
  />
);
