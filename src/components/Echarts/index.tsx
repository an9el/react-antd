import * as echarts from 'echarts';
import ReactEChartsCore from 'echarts-for-react/esm/core';
import type { EChartsReactProps } from 'echarts-for-react/esm/types';

import indexedChartTheme from './EChartsTheme.json';

echarts.registerTheme('MyTheme', indexedChartTheme);
function EChartsReact(props: EChartsReactProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ReactEChartsCore echarts={echarts} theme="MyTheme" {...props} />;
}

export default EChartsReact;
