import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { bannerSlide } from './bannerSlide'
import { landingPage } from './landingPage'
import { bannerSlider } from './bannerSlider'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, bannerSlide, landingPage, bannerSlider],
}
