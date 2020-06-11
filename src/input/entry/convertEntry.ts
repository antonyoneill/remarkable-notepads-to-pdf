import RemarkableMetadata from "../../types/RemarkableMetadata";
import DocumentMetadata from "../../types/DocumentMetadata";
import CollectionMetadata from "../../types/CollectionMetadata";
import getContent from "../notebook/getContent";
import EntryConversionContext from "../../types/EntryConversionContext";

const convertEntry = (
  context: EntryConversionContext,
  input: RemarkableMetadata
): DocumentMetadata | CollectionMetadata => {
  if (input.type === "CollectionType") {
    return {
      id: input.id,
      lastModified: input.lastModified,
      parent: input.parent,
      visibleName: input.visibleName,
      children: {},
    };
  } else if (input.type === "DocumentType") {
    const content = getContent({
      ...context,
      notebookId: input.id,
    });

    return {
      id: input.id,
      lastModified: input.lastModified,
      parent: input.parent,
      visibleName: input.visibleName,
      content,
    };
  }
};

export default convertEntry;
