import * as SampleModels from './models/sample';

export interface State {
  sample: {
    error: {
      items: Array<SampleModels.Error>,
      selection: SampleModels.Error
    },
    product: {
      items: Array<SampleModels.Product>,
      selection: SampleModels.Product
    }
  }
}
