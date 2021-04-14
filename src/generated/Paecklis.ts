/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Paecklis
// ====================================================

export interface Paecklis_paecklis_content_ComponentGeneralContact {
  __typename: "ComponentGeneralContact";
}

export interface Paecklis_paecklis_content_ComponentGeneralText_image {
  __typename: "UploadFile";
  url: string;
}

export interface Paecklis_paecklis_content_ComponentGeneralText {
  __typename: "ComponentGeneralText";
  id: string;
  title: string | null;
  content: string | null;
  image: Paecklis_paecklis_content_ComponentGeneralText_image | null;
}

export interface Paecklis_paecklis_content_ComponentGeneralBubble {
  __typename: "ComponentGeneralBubble";
  id: string;
  text: string | null;
}

export type Paecklis_paecklis_content = Paecklis_paecklis_content_ComponentGeneralContact | Paecklis_paecklis_content_ComponentGeneralText | Paecklis_paecklis_content_ComponentGeneralBubble;

export interface Paecklis_paecklis {
  __typename: "Paeckli";
  id: string;
  title: string | null;
  duration: string | null;
  description: string | null;
  content: (Paecklis_paecklis_content | null)[] | null;
}

export interface Paecklis {
  paecklis: (Paecklis_paecklis | null)[] | null;
}

export interface PaecklisVariables {
  slug: string;
}
