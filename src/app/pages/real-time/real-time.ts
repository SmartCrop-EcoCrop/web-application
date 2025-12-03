import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

type CameraMode = 'snapshot' | 'history';
type ControlAction = 'zoom' | 'contrast' | 'pause' | 'brightness';

interface CameraPreview {
  id: string;
  labelKey: string;
  image: string;
  temperature: string;
  humidity: string;
}

@Component({
  selector: 'app-real-time',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './real-time.html',
  styleUrls: ['./real-time.css']
})
export class RealTimeComponent {
  modes: { id: CameraMode; labelKey: string; descriptionKey: string }[] = [
    { id: 'snapshot', labelKey: 'realtime.snapshot', descriptionKey: 'realtime.snapshotDesc' },
    { id: 'history', labelKey: 'realtime.imageHistory', descriptionKey: 'realtime.historyDesc' }
  ];

  controlButtons: { type: ControlAction; labelKey: string }[] = [
    { type: 'zoom', labelKey: 'realtime.zoom' },
    { type: 'contrast', labelKey: 'realtime.contrast' },
    { type: 'pause', labelKey: 'realtime.pause' },
    { type: 'brightness', labelKey: 'realtime.brightness' }
  ];

  cameraPreviews: CameraPreview[] = [
    {
      id: 'zoneA',
      labelKey: 'realtime.zoneA',
      image: 'assets/huerto1.jpg',
      temperature: '24°C',
      humidity: '58%'
    },
    {
      id: 'zoneB',
      labelKey: 'realtime.zoneB',
      image: 'assets/huerto2.jpg',
      temperature: '26°C',
      humidity: '52%'
    },
    {
      id: 'zoneC',
      labelKey: 'realtime.zoneC',
      image: 'assets/huerto3.jpg',
      temperature: '23°C',
      humidity: '61%'
    }
  ];

  activeMode: CameraMode = 'snapshot';
  selectedCameraId = this.cameraPreviews[0].id;

  controlSettings = {
    zoom: 1.2,
    contrast: 50,
    brightness: 60,
    paused: false
  };

  selectMode(mode: CameraMode): void {
    this.activeMode = mode;
  }

  adjustControl(action: ControlAction): void {
    switch (action) {
      case 'zoom': {
        const nextZoom = +(this.controlSettings.zoom + 0.1).toFixed(1);
        this.controlSettings.zoom = nextZoom > 3 ? 1 : nextZoom;
        break;
      }
      case 'contrast': {
        const nextContrast = this.controlSettings.contrast + 5;
        this.controlSettings.contrast = nextContrast > 100 ? 40 : nextContrast;
        break;
      }
      case 'brightness': {
        const nextBrightness = this.controlSettings.brightness + 5;
        this.controlSettings.brightness = nextBrightness > 100 ? 45 : nextBrightness;
        break;
      }
      case 'pause':
        this.controlSettings.paused = !this.controlSettings.paused;
        break;
    }
  }

  selectCamera(cameraId: string): void {
    this.selectedCameraId = cameraId;
  }

  get selectedCamera(): CameraPreview {
    return this.cameraPreviews.find((camera) => camera.id === this.selectedCameraId) ?? this.cameraPreviews[0];
  }

  get activeModeDescription(): string {
    return this.modes.find((mode) => mode.id === this.activeMode)?.descriptionKey ?? 'realtime.snapshotDesc';
  }
}
