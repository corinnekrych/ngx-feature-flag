import { Feature } from '../service/feature-toggles.service';

export class FeatureFlagConfig {
    'user-level'?: string;
    showBanner?: string;
    featuresPerLevel?: {
        internal: Feature[];
        experimental: Feature[];
        beta: Feature[];
    };
}
