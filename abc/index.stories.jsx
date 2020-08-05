import { __awaiter } from "tslib";
import 'vue-tsx-support/enable-check';
import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
storiesOf('UI', module)
    .add('NjButton', () => {
    return Vue.extend({
        render() {
            const onOk = () => __awaiter(this, void 0, void 0, function* () {
                alert('hey');
            });
            return (<div>
            <div id='demo'>
              <div></div>
            </div>
          </div>);
        }
    });
});
//# sourceMappingURL=index.stories.jsx.map