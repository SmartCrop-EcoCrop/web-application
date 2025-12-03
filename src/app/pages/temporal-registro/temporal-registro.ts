import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';

type RangeKey = 'week' | 'month' | 'year' | 'custom';
type MetricKey = 'temperature' | 'pests' | 'events';

interface SummaryCard {
  labelKey: string;
  value: string;
  trend?: string;
}

interface TimelineEvent {
  id: number;
  time: string;
  titleKey: string;
  descriptionKey: string;
  type: 'alert' | 'info' | 'success';
}

@Component({
  selector: 'app-temporal-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './temporal-registro.html',
  styleUrl: './temporal-registro.css'
})
export class TemporalRegistroComponent {
  private readonly summaryByRange: Record<RangeKey, SummaryCard[]> = {
    week: [
      { labelKey: 'temporal.avgTemp', value: '25°C', trend: '+2%' },
      { labelKey: 'temporal.pestsDetected', value: '3', trend: '-1' },
      { labelKey: 'temporal.extremeConditions', value: '2' },
      { labelKey: 'temporal.alertsActions', value: '5' }
    ],
    month: [
      { labelKey: 'temporal.avgTemp', value: '24°C', trend: '+1%' },
      { labelKey: 'temporal.pestsDetected', value: '11', trend: '+2' },
      { labelKey: 'temporal.extremeConditions', value: '6' },
      { labelKey: 'temporal.alertsActions', value: '18' }
    ],
    year: [
      { labelKey: 'temporal.avgTemp', value: '22°C', trend: '-3%' },
      { labelKey: 'temporal.pestsDetected', value: '37', trend: '-6' },
      { labelKey: 'temporal.extremeConditions', value: '14' },
      { labelKey: 'temporal.alertsActions', value: '52' }
    ],
    custom: [
      { labelKey: 'temporal.avgTemp', value: '23°C' },
      { labelKey: 'temporal.pestsDetected', value: '5' },
      { labelKey: 'temporal.extremeConditions', value: '1' },
      { labelKey: 'temporal.alertsActions', value: '7' }
    ]
  };

  private readonly timelineByRange: Record<RangeKey, TimelineEvent[]> = {
    week: [
      { id: 1, time: '07:30', titleKey: 'temporal.timeline.irrigation', descriptionKey: 'temporal.timeline.irrigationDesc', type: 'info' },
      { id: 2, time: '09:10', titleKey: 'temporal.timeline.alert', descriptionKey: 'temporal.timeline.alertDesc', type: 'alert' },
      { id: 3, time: '13:45', titleKey: 'temporal.timeline.sensor', descriptionKey: 'temporal.timeline.sensorDesc', type: 'success' }
    ],
    month: [
      { id: 4, time: 'Semana 1', titleKey: 'temporal.timeline.harvest', descriptionKey: 'temporal.timeline.harvestDesc', type: 'success' },
      { id: 5, time: 'Semana 2', titleKey: 'temporal.timeline.irrigation', descriptionKey: 'temporal.timeline.irrigationDesc', type: 'info' },
      { id: 6, time: 'Semana 3', titleKey: 'temporal.timeline.alert', descriptionKey: 'temporal.timeline.alertDesc', type: 'alert' }
    ],
    year: [
      { id: 7, time: 'Mar', titleKey: 'temporal.timeline.sensor', descriptionKey: 'temporal.timeline.sensorDesc', type: 'info' },
      { id: 8, time: 'Jul', titleKey: 'temporal.timeline.harvest', descriptionKey: 'temporal.timeline.harvestDesc', type: 'success' },
      { id: 9, time: 'Sep', titleKey: 'temporal.timeline.alert', descriptionKey: 'temporal.timeline.alertDesc', type: 'alert' }
    ],
    custom: [
      { id: 10, time: 'Día 2', titleKey: 'temporal.timeline.irrigation', descriptionKey: 'temporal.timeline.irrigationDesc', type: 'info' }
    ]
  };

  readonly timeRanges = [
    { value: 'week' as RangeKey, labelKey: 'temporal.thisWeek' },
    { value: 'month' as RangeKey, labelKey: 'temporal.thisMonth' },
    { value: 'year' as RangeKey, labelKey: 'temporal.thisYear' }
  ];

  readonly metrics = [
    { value: 'temperature' as MetricKey, labelKey: 'temporal.temperature' },
    { value: 'pests' as MetricKey, labelKey: 'temporal.pests' },
    { value: 'events' as MetricKey, labelKey: 'temporal.events' }
  ];

  selectedRange: RangeKey = 'week';
  selectedMetric: MetricKey = 'temperature';
  showCustomFilters = false;
  customRangeApplied = false;
  customFilter = {
    from: '',
    to: ''
  };

  get summaryCards(): SummaryCard[] {
    return this.summaryByRange[this.selectedRange];
  }

  get timelineEvents(): TimelineEvent[] {
    return this.timelineByRange[this.selectedRange];
  }

  get insightKey(): string {
    const map: Record<MetricKey, string> = {
      temperature: 'temporal.insight.temperature',
      pests: 'temporal.insight.pests',
      events: 'temporal.insight.events'
    };
    return map[this.selectedMetric];
  }

  onRangeChange(range: RangeKey): void {
    this.selectedRange = range;
    this.customRangeApplied = false;
  }

  onMetricChange(metric: MetricKey): void {
    this.selectedMetric = metric;
  }

  toggleCustomFilters(force?: boolean): void {
    this.showCustomFilters = force ?? !this.showCustomFilters;
  }

  applyCustomRange(): void {
    if (!this.customFilter.from || !this.customFilter.to) {
      return;
    }
    this.selectedRange = 'custom';
    this.customRangeApplied = true;
    this.showCustomFilters = false;
  }
}
